import { ArrowRight, Filter } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-outline mb-12">
      <div className="md:col-span-8 py-12 pr-12 border-r border-outline">
        <h1 className="font-headline text-[3.5rem] md:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase mb-6">
          Curated<br />
          <span className="text-primary-fixed bg-on-background px-4">Recommendations</span>
        </h1>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="border border-outline px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest opacity-60">Input BPM</span>
            <span className="font-headline font-bold text-xl">124.00</span>
          </div>
          <div className="border border-outline px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest opacity-60">Reference Track</span>
            <span className="font-headline font-bold text-xl uppercase italic">Neon Wilderness</span>
          </div>
          <div className="border border-outline px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest opacity-60">Gallery Filter</span>
            <span className="font-headline font-bold text-xl uppercase">High Fidelity</span>
          </div>
        </div>
      </div>
      <div className="md:col-span-4 flex items-center justify-center p-8 bg-surface-container-low relative overflow-hidden group">
        <div className="sky-gradient absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 text-center">
          <p className="font-headline font-black text-6xl text-on-background/10 absolute -top-10 -left-10 select-none">SONIC</p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Filter className="w-24 h-24 text-surface opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
