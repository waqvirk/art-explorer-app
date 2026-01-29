import type { Artwork } from "../schemas/artwork.schema";

const GALLERY_STORAGE_KEY = "art_gallery";

export function getGallery(): Artwork[] {
  const storedGallery = localStorage.getItem(GALLERY_STORAGE_KEY);
  if (!storedGallery) return [];

  try {
    return JSON.parse(storedGallery) as Artwork[];
  } catch {
    return [];
  }
}

export function saveGallery(gallery: Artwork[]): void {
  localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(gallery));
}


export function addToGallery(artwork: Artwork): void {
  const gallery = getGallery();

  const exists = gallery.some((item) => item.id === artwork.id);
  if (exists) return;

  saveGallery([...gallery, artwork]);
}


export function removeFromGallery(artworkId: number): void {
  const gallery = getGallery();
  const updatedGallery = gallery.filter(art => art.id !== artworkId);
  saveGallery(updatedGallery);
}

