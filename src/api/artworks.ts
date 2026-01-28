import { z } from 'zod';
import { ArtworkSchema, type Artwork } from '../schemas/artwork.schema';

const API_URL = 'https://api.artic.edu/api/v1/artworks';

const ArtworksResponseSchema = z.object({
    data: z.array(ArtworkSchema),
})

export async function fetchArtworks(query: string): Promise<Artwork[]> {
    if (!query.trim()) return [];

    const url = `${API_URL}/search?q=${encodeURIComponent(query)}&limit=12&fields=id,title,artist_title,image_id`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    const json = await response.json();

    const parsed = ArtworksResponseSchema.safeParse(json);

    if (!parsed.success) {
        console.error('Invalid API response:', parsed.error);
        throw new Error('Invalid data from Art Institute API');
    }

    return parsed.data.data;
}