"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";

export function Nav(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>40); fn(); window.addEventListener("scroll",fn); return()=>window.removeEventListener("scroll",fn)},[]);
  return <>
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all ${scrolled?"pt-3":"pt-5 md:pt-7"}`}>
      <nav className={`mx-auto flex max-w-[1320px] items-center justify-between px-4 md:px-5 py-3 transition-all ${scrolled?"glass rounded-full":"bg-transparent"}`}>
        <a href="#home" className="font-black tracking-[-.05em] text-xl">ZORAX</a>
        <div className="hidden lg:flex items-center gap-7">
          {nav.map(item=><a key={item} className="text-[11px] uppercase tracking-[.14em] text-white/65 hover:text-white" href={`#${item.toLowerCase().replace(" ","-")}`}>{item}</a>)}
        </div>
        <a href="#apply" className="hidden md:inline-flex btn btn-primary rounded-full">Start your growth</a>
        <button aria-label="Open menu" onClick={()=>setOpen(true)} className="md:hidden text-xs uppercase tracking-[.14em]">Menu</button>
      </nav>
    </header>
    <AnimatePresence>
      {open && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[70] bg-black p-6 flex flex-col">
        <div className="flex justify-between"><b className="text-xl">ZORAX</b><button onClick={()=>setOpen(false)} className="uppercase text-xs tracking-[.14em]">Close</button></div>
        <div className="mt-auto mb-auto flex flex-col">
          {nav.map(item=><a onClick={()=>setOpen(false)} key={item} className="text-[13vw] leading-[1] uppercase font-black tracking-[-.06em] border-b border-white/10 py-2" href={`#${item.toLowerCase().replace(" ","-")}`}>{item}</a>)}
        </div>
      </motion.div>}
    </AnimatePresence>
  </>;
}