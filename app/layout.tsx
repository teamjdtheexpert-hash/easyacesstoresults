import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wearezorax.com"),
  title: { default:"Zorax Marketing — The Future of Artist Growth", template:"%s | Zorax Marketing" },
  description:"Zorax Marketing builds audience, brand, content, technology and revenue systems for independent artists.",
  alternates:{canonical:"/"},
  openGraph:{title:"Zorax Marketing — The Future of Artist Growth",description:"Build the artist. Build the audience. Build the business.",url:"https://wearezorax.com",siteName:"Zorax Marketing",type:"website"},
  twitter:{card:"summary_large_image",title:"Zorax Marketing — The Future of Artist Growth",description:"Build the artist. Build the audience. Build the business."}
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}