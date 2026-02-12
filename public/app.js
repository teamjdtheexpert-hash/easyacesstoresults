const navButtons = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".panel");
const output = document.getElementById("output");
const apiCheck = document.getElementById("check-api");
const socialCount = document.getElementById("social-count");
const musicCount = document.getElementById("music-count");

function updateCounts() {
  const socialConnected = document.querySelectorAll('[data-group="Social"][data-connected="true"]').length;
  const musicConnected = document.querySelectorAll('[data-group="Music"][data-connected="true"]').length;
  const socialTotal = document.querySelectorAll('[data-group="Social"]').length;
  const musicTotal = document.querySelectorAll('[data-group="Music"]').length;

  if (socialCount) socialCount.textContent = `${socialConnected} / ${socialTotal}`;
  if (musicCount) musicCount.textContent = `${musicConnected} / ${musicTotal}`;
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    navButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === tab);
    });
  });
});

document.querySelectorAll(".connect-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".platform-card");
    if (!card) return;

    const badge = card.querySelector(".badge");
    const isConnected = card.dataset.connected === "true";

    card.dataset.connected = isConnected ? "false" : "true";
    button.textContent = isConnected ? "Connect" : "Disconnect";
    button.classList.toggle("connected", !isConnected);

    if (badge) {
      badge.textContent = isConnected ? "Not connected" : "Connected";
      badge.classList.toggle("connected", !isConnected);
      badge.classList.toggle("disconnected", isConnected);
    }

    updateCounts();
  });
});

apiCheck?.addEventListener("click", async () => {
  output.textContent = "Loading /api/health ...";
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `Request failed: ${error.message}`;
  }
});

updateCounts();
