import { z } from 'zod';

export const ArtworkSchema = z.object({
    id: z.number(),
    title: z.string().min(1).default('Untitled'),
    artist_title: z.string().min(1).nullable().default('Unknown Artist'),
    image_id: z.string().min(1).nullable(),
});

export type Artwork = z.infer<typeof ArtworkSchema>;