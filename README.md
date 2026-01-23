Art Institute Explorer
A React + TypeScript app that lets users search the Art Institute of Chicago's collection, save favorite artworks to a personal gallery, and add notes to each piece.

✨ Features
🔍 Search artworks from the Art Institute of Chicago API

🖼️ Browse results with thumbnail cards (title, artist, ID, image)

💾 Save favorites to localStorage gallery

📝 Add notes to saved artworks

🗑️ Delete items from gallery

🎨 Responsive Tailwind CSS design

✅ Type-safe TypeScript throughout

🛠️ Tech Stack
React 19 + Vite (TypeScript)
Tailwind CSS
Art Institute of Chicago API
localStorage persistence

🚀 Quick Start
Clone repo
cd art-explorer
npm install
npm run dev


📁 Project Structure
text
src/
├── api/           # API helpers (artworks.ts)
├── components/    # Reusable UI (SearchBar.tsx, ArtworkCard.tsx)
├── types/         # TypeScript interfaces (artwork.ts)
├── App.tsx        # Main app layout
└── index.css      # Tailwind imports

🎯 Functional Requirements
ID	Feature	Status
FR001	React + Vite (TS) setup	✅
FR002	Core Dependencies Zod and Tailwindcss ✅
FR003   Artwork Zod Schema ⏳
FR004	API Fetch + Validation ✅⏳
FR005	Search interface ✅
FR006	ArtworkCard component ✅
FR007-012	Gallery CRUD + notes ⏳ Next


🔗 API Documentation
Art Institute Chicago API: https://api.artic.edu/docs/
Search endpoint: /api/v1/artworks/search?q={query}&fields=id,title,artist_title,image_id
Image URLs: https://www.artic.edu/iiif/2/{image_id}/full/{size}/default.jpg

🧪 Testing
Search for "monet", "picasso", or "van gogh" to see results!

🙌 Acknowledgments
Art Institute of Chicago API
Built during [WBS Coding Bootcamp] - Jan 2026