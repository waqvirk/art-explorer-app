import { useState } from "react";
import { fetchArtworks } from "./api/artworks";
import type { Artwork } from "./types/artwork";
import { SearchBar } from "./components/SearchBar";
import { ArtworkCard } from "./components/ArtworkCard";

export default function App() {
  const [results, setResults] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const artworks = await fetchArtworks(query);
      setResults(artworks);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3">
          
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold text-slate-900">
              Art Institute Explorer
            </h1>
            <div className="w-full max-w-md">
              <SearchBar onSearch={handleSearch} loading={loading} />
            </div>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {error && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}

        <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((art) => (
            <ArtworkCard
              key={art.id}
              artwork={art}
              onAddToGallery={() => console.log("Add to gallery", art.id)}
            />
          ))}
        </section>

      </main>

    </div>
    )}
