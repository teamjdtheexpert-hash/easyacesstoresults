"use client";
import { FormEvent, useState } from "react";

export function ApplicationForm(){
  const [sent,setSent]=useState(false);
  const submit=(e:FormEvent)=>{e.preventDefault(); setSent(true)};
  const fields=["Full name","Artist name","Email","Phone","Country","Genre","Spotify link","YouTube link","Instagram / TikTok","Monthly listeners","Monthly marketing budget"];
  return <form onSubmit={submit} className="grid md:grid-cols-2 gap-x-8">
    {fields.map(x=><label key={x}><span className="sr-only">{x}</span><input required={["Full name","Artist name","Email","Country"].includes(x)} className="input" placeholder={x}/></label>)}
    <label className="md:col-span-2"><span className="sr-only">What are you trying to achieve?</span><textarea className="input min-h-28 resize-y" placeholder="What are you trying to achieve?"/></label>
    <label className="md:col-span-2 mt-6 flex items-center gap-3 text-sm text-white/70"><input required type="checkbox"/> I&apos;m ready to build my artist brand.</label>
    <div className="md:col-span-2 mt-8 flex items-center gap-4">
      <button className="btn btn-primary" type="submit">Apply to Zorax</button>
      {sent && <span role="status" className="text-sm text-white/60">Application captured in the interface. Connect your preferred CRM/form endpoint for live delivery.</span>}
    </div>
  </form>;
}