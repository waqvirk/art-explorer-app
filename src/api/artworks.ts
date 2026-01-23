import type { Artwork } from '../types/artwork';

const API_URL = 'https://api.artic.edu/api/v1/artworks';

interface ArtworksResponse {
  data: Artwork[];
}

export async function fetchArtworks(query: string): Promise<Artwork[]> {
    if (!query.trim()) return [];

    const url = `${API_URL}/search?q=${encodeURIComponent(query)}&limit=12&fields=id,title,artist_title,image_id`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    const json: ArtworksResponse = await response.json();
    return json.data ?? [];
}