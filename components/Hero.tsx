"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero(){
  const {scrollY}=useScroll();
  const y=useTransform(scrollY,[0,900],[0,180]);
  const opacity=useTransform(scrollY,[0,700],[1,.25]);
  return <section id="home" className="relative min-h-screen overflow-hidden flex items-end border-b border-white/10">
    <motion.div style={{y,opacity}} className="absolute inset-0">
      <div className="absolute inset-0 grid-lines opacity-30"/>
      <div className="absolute -right-[12vw] top-[8vh] h-[72vw] max-h-[900px] w-[72vw] max-w-[900px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,.22),rgba(144,168,255,.08)_28%,transparent_66%)] shadow-glow"/>
      <div className="absolute left-[57%] top-[42%] h-[1px] w-[36vw] rotate-[-24deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"/>
    </motion.div>
    <div className="relative z-10 w-full px-5 md:px-10 pb-10 md:pb-14 pt-40">
      <div className="max-w-[1500px] mx-auto">
        <p className="eyebrow mb-6">Artist development × growth systems × technology</p>
        <motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.22,1,.36,1]}} className="display max-w-[1400px]">The future of artist growth.</motion.h1>
        <div className="mt-8 md:mt-10 grid md:grid-cols-[1fr_.9fr] gap-8 items-end">
          <p className="body-xl max-w-2xl">Zorax Marketing builds the audience, brand and revenue systems behind independent artists ready for their next era.</p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a className="btn btn-primary" href="#apply">Start your growth</a>
            <a className="btn" href="#artist-growth">Explore Zorax</a>
          </div>
        </div>
        <div className="mt-10 pt-5 border-t border-white/15 flex justify-between text-[10px] md:text-xs uppercase tracking-[.15em] text-white/45">
          <span>This is not another music promotion company.</span><span className="hidden md:inline">Global artist growth infrastructure</span>
        </div>
      </div>
    </div>
  </section>;
}