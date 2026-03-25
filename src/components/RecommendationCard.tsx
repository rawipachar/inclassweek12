import { Play } from "lucide-react";
import { GalleryItem } from "../types";
import { cn } from "../lib/utils";

interface Props {
  item: GalleryItem;
  index: number;
  key?: string | number;
}

export default function RecommendationCard({ item, index }: Props) {
  return (
    <div className="border-r border-b border-outline p-6 hover:bg-surface-container-low transition-colors group">
      <div className="aspect-square bg-surface-container-highest mb-6 overflow-hidden relative border border-outline/20">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-8 text-center border border-dashed border-outline/50">
            <span className="text-[0.7rem] uppercase tracking-widest opacity-40 italic">
              Visual archive not found for this entry
            </span>
          </div>
        )}
        {index === 0 && (
          <div className="absolute top-0 right-0 bg-on-background text-surface px-3 py-1 text-[0.7rem] uppercase tracking-widest">
            01 / 12
          </div>
        )}
        {item.matchPercentage && (
          <div className="absolute bottom-0 left-0 bg-primary-fixed text-on-background px-3 py-1 text-[0.7rem] uppercase tracking-widest font-bold">
            MATCH {item.matchPercentage}%
          </div>
        )}
        {item.isArchive && (
          <div className="absolute inset-0 bg-on-background flex flex-col items-center justify-center p-6 text-center">
            <span className="font-headline font-black text-primary-fixed text-4xl mb-2 tracking-tighter uppercase">ARCHIVE SELECT</span>
            <span className="text-[0.6rem] text-surface opacity-50 tracking-[0.3em]">ENCRYPTED DATA STREAM</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-headline font-bold text-2xl uppercase leading-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm opacity-70 uppercase tracking-tight">{item.artist}</p>
      </div>
      <div className="mt-8 flex justify-between items-end">
        <div>
          <span className="text-[0.65rem] uppercase tracking-widest block opacity-50">Tempo</span>
          <span className="font-headline font-extrabold text-xl">{item.bpm} BPM</span>
        </div>
        <button className="bg-on-background text-surface p-3 hover:bg-primary transition-colors">
          <Play className="w-4 h-4 fill-current" />
        </button>
      </div>
    </div>
  );
}
