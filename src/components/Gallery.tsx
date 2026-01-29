import { useEffect, useState } from "react";
import type { Artwork } from "../schemas/artwork.schema";
import { getGallery, addToGallery, removeFromGallery } from "../lib/gallery-storage";
import ArtworkCard from "./ArtworkCard";

interface GalleryProps {
    onAddRequest?: (addFn: (art: Artwork) => void) => void;
}

export default function Gallery({ onAddRequest }: GalleryProps) {
  const [artwork, setArtwork] = useState<Artwork[]>([]);

  useEffect(() => {
    setArtwork(getGallery());
  }, []);

  const handleAdd = (art: Artwork) => {
    addToGallery(art);
    setArtwork(getGallery());
  }
  const handleRemove = (artworkId: number) => {
    removeFromGallery(artworkId);
    setArtwork(getGallery());
  };
  
  useEffect(() => {
    onAddRequest?.(handleAdd);
  }, [onAddRequest]);

  if (artwork.length === 0) {
    return <p>Your gallery is empty.</p>;
  }

  return (
    <>
      <h2 className="mb-4 mt-10 text-lg font-semibold">Your Art Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {artwork.map((art) => (
          <ArtworkCard
            key={art.id}
            artwork={art}
            isGallery
            onRemove={() => handleRemove(art.id)}
          />
        ))}
      </div>
    </>
  );
}
