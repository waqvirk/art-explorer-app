import type { Artwork } from "../schemas/artwork.schema";

interface ArtworkCardProps {
  artwork: Artwork;
  onAdd?: () => void;
  onRemove?: () => void;
  isGallery?: boolean;
}

export default function ArtworkCard({ artwork, onAdd, onRemove, isGallery }: ArtworkCardProps) {
  const { id, title, artist_title, image_id } = artwork;

  const thumbnailUrl = image_id
    ? `https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`
    : undefined;

  return (
    <article className="flex gap-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200">
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-24 w-24 shrink-0 rounded-md object-cover hover:scale-115 lg:hover:scale-250 transition-all duration-200"
        />
      ) : (
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs text-slate-500">
          No image
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <p className="text-xs text-slate-400">ID: {id}</p>
        <h3 className="mt-1 text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-600">
          {artist_title || "Unknown artist"}
        </p>

        {isGallery ? (
          <button onClick={onRemove} className="mt-2 inline-flex w-fit items-center rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-red-600">
            Remove from Gallery
          </button>
        ) : (
          <button
            onClick={onAdd}
            className="mt-2 inline-flex w-fit items-center rounded-md bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-green-600"
          >
            Add to Gallery
          </button>
        )}
      </div>
    </article>
  );
}
