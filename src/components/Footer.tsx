export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline w-full px-6 py-12 mt-20 flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold text-on-background font-headline uppercase tracking-tighter">Sonic Gallery</div>
        <p className="text-[0.75rem] uppercase tracking-widest font-medium opacity-60">© 2024 THE SONIC GALLERY. ALL RIGHTS RESERVED.</p>
      </div>
      <div className="flex gap-8">
        <a className="text-[0.75rem] uppercase tracking-widest font-medium opacity-60 hover:opacity-100 hover:underline transition-all" href="#">Privacy</a>
        <a className="text-[0.75rem] uppercase tracking-widest font-medium opacity-60 hover:opacity-100 hover:underline transition-all" href="#">Terms</a>
        <a className="text-[0.75rem] uppercase tracking-widest font-medium opacity-60 hover:opacity-100 hover:underline transition-all" href="#">Contact</a>
        <a className="text-[0.75rem] uppercase tracking-widest font-medium opacity-60 hover:opacity-100 hover:underline transition-all underline decoration-primary" href="#">Archive</a>
      </div>
    </footer>
  );
}
