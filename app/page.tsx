import { ApplicationForm } from "@/components/ApplicationForm";
import { Hero } from "@/components/Hero";
import { MotionReveal } from "@/components/MotionReveal";
import { Nav } from "@/components/Nav";
import { artists, caseStudies, impact, process, program, services, system } from "@/lib/content";

function SectionTitle({eyebrow,title,copy}:{eyebrow:string;title:string;copy?:string}){return <MotionReveal><div className="grid lg:grid-cols-[.45fr_1fr] gap-6 mb-14 md:mb-20"><p className="eyebrow">{eyebrow}</p><div><h2 className="h2">{title}</h2>{copy&&<p className="body-xl mt-6 max-w-3xl">{copy}</p>}</div></div></MotionReveal>}

export default function Home(){
  const schema={"@context":"https://schema.org","@type":"Organization",name:"Zorax Marketing",url:"https://wearezorax.com",description:"Artist growth, music marketing, artist development and digital music systems."};
  return <main>
    <Nav/><Hero/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>

    <section className="section border-b border-white/10">
      <div className="wrap">
        <SectionTitle eyebrow="Built different" title="Built for artists who are ready to move different." copy="Campaign visuals, streaming proof, press coverage, platform growth and content outcomes belong here — using only verified Zorax work."/>
        <div className="overflow-hidden border-y border-white/10 py-5 whitespace-nowrap">
          <div className="inline-flex gap-14 animate-[marquee_26s_linear_infinite] text-sm uppercase tracking-[.18em] text-white/45">
            {["Artist artwork","Campaign visuals","Streaming screenshots","YouTube results","Social growth","Press coverage","Content campaigns","Verified proof only"].map(x=><span key={x}>{x}</span>)}
          </div>
        </div>
      </div>
    </section>

    <section id="artist-growth" className="section">
      <div className="wrap">
        <SectionTitle eyebrow="The Zorax System" title="We don't just promote releases." copy="We build artist ecosystems."/>
        <div className="border-t border-white/15">
          {system.map(([n,t,d],i)=><MotionReveal key={n} delay={i*.03}><div className="grid grid-cols-[50px_1fr] md:grid-cols-[100px_.8fr_1fr] gap-4 py-7 md:py-9 border-b border-white/10 group">
            <span className="text-xs text-white/35">{n}</span><h3 className="text-3xl md:text-5xl uppercase font-bold tracking-[-.05em] group-hover:translate-x-2 transition-transform">{t}</h3><p className="col-start-2 md:col-start-auto text-white/55 md:text-lg">{d}</p>
          </div></MotionReveal>)}
        </div>
      </div>
    </section>

    <section id="services" className="section bg-[#0a0a0b] border-y border-white/10">
      <div className="wrap">
        <SectionTitle eyebrow="Capabilities" title="One growth engine. Multiple systems."/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
          {services.map(([name,desc],i)=><MotionReveal key={name} delay={(i%3)*.04}><article className="min-h-60 p-6 md:p-8 border-r border-b border-white/10 hover:bg-white/[.035] transition-colors">
            <p className="eyebrow mb-16">{String(i+1).padStart(2,"0")}</p><h3 className="text-2xl uppercase font-bold tracking-[-.04em]">{name}</h3><p className="mt-4 text-white/55 leading-7">{desc}</p>
          </article></MotionReveal>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <SectionTitle eyebrow="90-day framework" title="The Artist Growth System" copy="A structured growth system designed to turn independent artists into recognizable brands."/>
        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {program.map(([month,title,items])=><div key={String(month)} className="bg-[#080808] p-7 md:p-9 min-h-[390px]">
            <p className="eyebrow">{String(month)}</p><h3 className="text-5xl mt-8 uppercase tracking-[-.06em] font-black">{String(title)}</h3>
            <ul className="mt-20 space-y-3 text-white/55">{(items as string[]).map(x=><li key={x} className="border-t border-white/10 pt-3">{x}</li>)}</ul>
          </div>)}
        </div>
        <a className="btn btn-primary mt-8" href="#apply">Apply for artist growth</a>
      </div>
    </section>

    <section id="results" className="section bg-white text-black">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16"><p className="eyebrow !text-black/50">Results / Case studies</p><h2 className="h2">Attention is easy. Impact is the goal.</h2></div>
        <div className="grid lg:grid-cols-2 gap-5">
          {caseStudies.map((c,i)=><article key={c.artist} className="border border-black/15 p-7 md:p-9 min-h-[430px] flex flex-col">
            <p className="text-xs uppercase tracking-[.15em] text-black/50">Case study {String(i+1).padStart(2,"0")}</p>
            <h3 className="text-4xl md:text-6xl font-black tracking-[-.06em] uppercase mt-7">{c.artist}</h3>
            <div className="mt-auto grid gap-4 text-sm">
              <p><b>Objective</b><br/><span className="text-black/55">{c.objective}</span></p>
              <p><b>Strategy</b><br/><span className="text-black/55">{c.strategy}</span></p>
              <p><b>Results</b><br/><span className="text-black/55">{c.result}</span></p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section grid-lines">
      <div className="wrap">
        <p className="eyebrow mb-12">Zorax impact — verified numbers only</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {impact.map((m,i)=><div className="bg-[#080808]/95 p-6 min-h-48" key={m}><div className="text-5xl md:text-6xl font-black tracking-[-.06em]">{i<2?"XXM+":"XXK+"}</div><p className="mt-12 text-xs uppercase tracking-[.14em] text-white/45">{m}</p></div>)}
        </div>
      </div>
    </section>

    <section id="about" className="section">
      <div className="wrap">
        <SectionTitle eyebrow="Why Zorax" title="The music industry changed. So did we." copy="Modern artists need more than traditional promotion. Zorax connects creative, marketing, data, content, technology and automation into one operating system for growth."/>
        <div className="flex flex-wrap gap-3">{["Creative","Marketing","Data","Content","Technology","Automation"].map(x=><span key={x} className="glass px-5 py-3 text-sm uppercase tracking-[.14em]">{x}</span>)}</div>
      </div>
    </section>

    <section className="section border-y border-white/10 bg-[#0a0a0b]">
      <div className="wrap grid lg:grid-cols-[1fr_.8fr] gap-12">
        <div><p className="eyebrow mb-8">AI + technology</p><h2 className="h2">The artist is human. The system is intelligent.</h2></div>
        <div className="body-xl lg:pt-20"><p>Technology should support better decisions, faster workflows and stronger fan experiences — not replace the artist.</p>
          <div className="mt-10 grid grid-cols-2 gap-x-8">{["Audience research","Campaign optimization","Content workflows","Lead generation","Fan engagement","Analytics","Automation","Marketing operations"].map(x=><div className="py-4 border-t border-white/10 text-sm uppercase tracking-[.1em] text-white/55" key={x}>{x}</div>)}</div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <SectionTitle eyebrow="Artist showcase" title="Artists are the center of the system."/>
        <div className="grid md:grid-cols-3 gap-4">
          {artists.map((a,i)=><article key={a.name} className="group relative aspect-[3/4] border border-white/10 overflow-hidden bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,.14),transparent_35%),linear-gradient(135deg,#111,#050505)]">
            <div className="absolute inset-0 grid-lines opacity-30 group-hover:scale-110 transition-transform duration-700"/>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
              <span className="eyebrow">0{i+1}</span><h3 className="text-3xl uppercase font-black tracking-[-.05em] mt-2">{a.name}</h3><p className="text-sm text-white/45 mt-2">{a.genre} · {a.campaign}</p><p className="text-sm mt-4">{a.result}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section border-t border-white/10">
      <div className="wrap">
        <SectionTitle eyebrow="Process" title="From music to movement."/>
        <div className="grid md:grid-cols-4 gap-0 border-t border-white/10">
          {process.map(([n,t,d])=><div key={n} className="py-7 md:px-5 md:border-l border-b md:border-b-0 border-white/10"><p className="eyebrow">{n}</p><h3 className="text-2xl uppercase font-bold tracking-[-.04em] mt-12">{t}</h3><p className="text-white/50 mt-3 leading-6">{d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section min-h-[75vh] flex items-center grid-lines">
      <div className="wrap"><p className="eyebrow mb-8">Next era</p><h2 className="display max-w-6xl">Your next era starts here.</h2><p className="body-xl mt-8 max-w-2xl">Stop treating your music like a hobby. Build the audience, brand and business behind it.</p><div className="flex gap-3 mt-8"><a className="btn btn-primary" href="#apply">Start your growth</a><a className="btn" href="#contact">Talk to Zorax</a></div></div>
    </section>

    <section id="apply" className="section bg-white text-black">
      <div className="wrap grid lg:grid-cols-[.7fr_1fr] gap-14">
        <div><p className="eyebrow !text-black/45 mb-6">Artist application</p><h2 className="h2">Build the artist. Build the audience. Build the business.</h2></div>
        <div className="[&_.input]:!text-black [&_.input]:!border-black/20 [&_.input::placeholder]:!text-black/40"><ApplicationForm/></div>
      </div>
    </section>

    <footer id="contact" className="section !pb-8">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-10">
          <div><div className="text-5xl md:text-7xl font-black tracking-[-.07em]">ZORAX</div><p className="text-white/45 mt-3">The future of artist growth.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>{["Artist Growth","Services","Results","About","Contact"].map(x=><a className="block py-1 text-white/60 hover:text-white" href={`#${x.toLowerCase().replace(" ","-")}`} key={x}>{x}</a>)}</div>
            <div>{["Instagram","TikTok","YouTube","Spotify","Facebook","X"].map(x=><span className="block py-1 text-white/60" key={x}>{x}</span>)}</div>
            <div><p className="text-white/60">wearezorax.com</p><p className="text-white/35 mt-4">Privacy Policy<br/>Terms</p></div>
          </div>
        </div>
        <div className="mt-20 pt-5 border-t border-white/10 flex flex-wrap gap-3 justify-between text-[10px] uppercase tracking-[.14em] text-white/35"><span>© {new Date().getFullYear()} Zorax Marketing</span><span>Build the artist. Build the audience. Build the business.</span></div>
      </div>
    </footer>
  </main>;
}