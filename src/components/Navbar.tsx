import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter font-headline uppercase">
          Sonic Gallery
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-headline font-bold uppercase tracking-tighter text-lg border-b-2 border-primary">Home</a>
          <a href="#" className="font-headline font-bold uppercase tracking-tighter text-lg opacity-70 hover:opacity-100">Gallery</a>
          <a href="#" className="font-headline font-bold uppercase tracking-tighter text-lg opacity-70 hover:opacity-100">About</a>
        </div>
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
