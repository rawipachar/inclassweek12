/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecommendationCard from "./components/RecommendationCard";
import PreferenceForm from "./components/PreferenceForm";
import Footer from "./components/Footer";
import { GalleryItem } from "./types";
import { ArrowRight } from "lucide-react";

const SAMPLE_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Aether Waves",
    artist: "Systematic Echoes",
    bpm: 124,
    imageUrl: "https://picsum.photos/seed/aether/800/800",
  },
  {
    id: "2",
    title: "Binary Sunset",
    artist: "Klaus Vonder",
    bpm: 122,
    imageUrl: "https://picsum.photos/seed/binary/800/800",
  },
  {
    id: "3",
    title: "Grid Horizon",
    artist: "The Brutalists",
    bpm: 124,
    imageUrl: "https://picsum.photos/seed/grid/800/800",
    matchPercentage: 98,
  },
  {
    id: "4",
    title: "Static Void",
    artist: "Analog Signal",
    bpm: 126,
  },
  {
    id: "5",
    title: "Deep Blue Pulse",
    artist: "Aquatic Theory",
    bpm: 124,
    imageUrl: "https://picsum.photos/seed/pulse/800/800",
  },
  {
    id: "6",
    title: "Neon Flux",
    artist: "Cyber Archive",
    bpm: 128,
    imageUrl: "https://picsum.photos/seed/neon/800/800",
  },
  {
    id: "7",
    title: "Cipher Suite",
    artist: "The Architect",
    bpm: 123,
    isArchive: true,
  },
  {
    id: "8",
    title: "Vinyl Artifact",
    artist: "Organic Flow",
    bpm: 124,
    imageUrl: "https://picsum.photos/seed/vinyl/800/800",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-24 max-w-[1440px] mx-auto px-6">
        <Hero />
        
        <PreferenceForm />

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-outline">
          {SAMPLE_ITEMS.map((item, index) => (
            <RecommendationCard key={item.id} item={item} index={index} />
          ))}
        </section>

        <div className="mt-20 flex justify-end border-t border-outline">
          <div className="border-l border-outline p-12 w-full md:w-1/2 flex items-center justify-between group cursor-pointer hover:bg-on-background transition-colors duration-300">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] opacity-40 group-hover:text-surface group-hover:opacity-100 transition-all">End of Archive</span>
              <h4 className="font-headline font-black text-4xl uppercase tracking-tighter group-hover:text-primary-fixed transition-colors">Load More Entries</h4>
            </div>
            <ArrowRight className="w-12 h-12 group-hover:text-surface transition-colors" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
