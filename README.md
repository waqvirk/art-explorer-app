# 🎨 Art Institute Explorer

A **React + TypeScript** application that allows users to explore the **Art Institute of Chicago’s collection**, save favorite artworks to a personal gallery, and add notes to each piece.

---

## ✨ Features

- 🔍 **Search artworks** from the Art Institute of Chicago API
- 🖼️ **Browse results** with thumbnail cards (title, artist, ID, image)
- 💾 **Save favorites** to a gallery stored in `localStorage`
- 📝 **Add notes** to saved artworks
- 🗑️ **Delete artworks** from the gallery
- 🎨 **Responsive Tailwind CSS design**
- ✅ **Type-safe TypeScript throughout**

---

## 🛠️ Tech Stack

- React 19 + Vite (TypeScript)
- Tailwind CSS
- Zod
- Art Institute of Chicago API
- localStorage persistence

---

## 🚀 Quick Start

    git clone <repo-url>
    cd art-explorer
    npm install
    npm run dev

---

## 📁 Project Structure

    src/
    ├── api/            # API helpers (artworks.ts)
    ├── components/     # Reusable UI components
    │   ├── SearchBar.tsx
    │   └── ArtworkCard.tsx
    ├── types/          # TypeScript interfaces (artwork.ts)
    ├── App.tsx         # Main app layout
    └── index.css       # Tailwind imports

---

## 🎯 Functional Requirements

| ID        | Feature                               | Status |
|----------:|---------------------------------------|:------:|
| FR001     | React + Vite (TS) setup               | ✅ |
| FR002     | Core dependencies (Zod, Tailwind CSS) | ✅ |
| FR003     | Artwork Zod schema                    | ⏳ |
| FR004     | API fetch + validation                | ✅⏳ |
| FR005     | Search interface                      | ✅ |
| FR006     | ArtworkCard component                 | ✅ |
| FR007–012 | Gallery CRUD + notes                  | ⏳ Next |

---

## 🔗 API Documentation

**Art Institute of Chicago API**  
https://api.artic.edu/docs/

**Search Endpoint**

    /api/v1/artworks/search?q={query}&fields=id,title,artist_title,image_id

**Image URL Format**

    https://www.artic.edu/iiif/2/{image_id}/full/{size}/default.jpg

---

## 🧪 Testing

Try searching for:
- monet
- picasso
- van gogh

---

## 🙌 Acknowledgments

- Art Institute of Chicago API
- Built during **WBS Coding Bootcamp — January 2026**
