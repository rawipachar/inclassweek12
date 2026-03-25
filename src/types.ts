export interface GalleryItem {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  imageUrl?: string;
  matchPercentage?: number;
  isArchive?: boolean;
}

export type Mood = 'EUPHORIC' | 'MELANCHOLIC' | 'AGGRESSIVE' | 'ETHEREAL';
