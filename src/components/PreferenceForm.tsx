import { ArrowRight } from "lucide-react";
import { Mood } from "../types";
import { useState } from "react";

export default function PreferenceForm() {
  const [mood, setMood] = useState<Mood>('EUPHORIC');

  const moods: Mood[] = ['EUPHORIC', 'MELANCHOLIC', 'AGGRESSIVE', 'ETHEREAL'];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-x border-y border-outline mb-12">
      <div className="p-12 border-b md:border-b-0 md:border-r border-outline bg-surface-container-lowest">
        <div className="mb-12">
          <span className="font-label text-xs uppercase tracking-[0.4em] mb-4 block">Issue No. 001 — Sonic Curations</span>
          <h2 className="font-headline font-black text-[4rem] md:text-[6rem] leading-[0.85] text-primary-fixed bg-on-background inline-block px-4 tracking-tighter uppercase">
            Your Sound<br />Unbound.
          </h2>
          <p className="font-body text-xl mt-8 text-on-surface-variant font-medium max-w-md">
            An experimental algorithmic gallery that decodes your emotional spectrum into sonic architecture.
          </p>
        </div>
        <div className="flex items-center gap-4 mb-12">
          <span className="w-8 h-[1px] bg-on-background" />
          <h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Input Parameters</h2>
        </div>
        <form className="space-y-12">
          <div className="group">
            <label className="text-[0.65rem] uppercase tracking-widest text-outline mb-4 block">01 / Recent Favorite Track</label>
            <input
              type="text"
              className="w-full bg-transparent border-0 border-b border-on-background p-0 pb-4 focus:ring-0 focus:border-primary text-2xl font-headline placeholder:text-surface-dim uppercase transition-all"
              placeholder="ARTIST - SONG TITLE"
            />
          </div>
          <div>
            <label className="text-[0.65rem] uppercase tracking-widest text-outline mb-6 block">02 / Emotional State</label>
            <div className="grid grid-cols-2 gap-4">
              {moods.map((m) => (
                <label
                  key={m}
                  className={`border border-outline p-6 cursor-pointer hover:bg-surface-container-high transition-colors flex justify-between items-center ${mood === m ? 'bg-surface-container-high' : ''}`}
                >
                  <input
                    type="radio"
                    name="mood"
                    className="hidden"
                    checked={mood === m}
                    onChange={() => setMood(m)}
                  />
                  <span className="font-headline font-bold uppercase text-base">{m}</span>
                  <span className={`w-4 h-4 border border-on-background ${mood === m ? 'bg-primary-fixed' : ''}`} />
                </label>
              ))}
            </div>
          </div>
        </form>
      </div>
      <div className="bg-surface-container-low p-12 flex flex-col">
        <div className="flex-grow">
          <div className="border border-outline mb-12">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="https://picsum.photos/seed/studio/1200/800"
                alt="Studio"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="font-headline text-lg font-black uppercase mb-4 leading-tight">Selection Algorithm</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our neural engine analyzes spectral density and harmonic resonance to match your exact psychological profile.
              </p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <span className="text-[0.65rem] uppercase tracking-widest text-outline block text-right">Data Source</span>
              <span className="font-headline font-bold text-xl uppercase italic">The Vault</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-12 border-t border-outline/30 grid grid-cols-3 gap-4">
          <div className="aspect-square bg-surface border border-outline flex items-center justify-center p-4">
            <span className="material-symbols-outlined text-4xl opacity-20">album</span>
          </div>
          <div className="aspect-square bg-surface border border-outline flex items-center justify-center p-4">
            <span className="material-symbols-outlined text-4xl opacity-20">equalizer</span>
          </div>
          <div className="aspect-square bg-primary-fixed border border-on-background flex items-center justify-center p-4">
            <ArrowRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
