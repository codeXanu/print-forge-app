# 🖨️ PrintForge

**PrintForge** is a modern Next.js 15 application for browsing and discovering user-submitted 3D printing models. It features category-based navigation, individual model pages, and a clean, responsive UI — all powered by static JSON data (mock backend).

## 🚀 Features

- 🔍 Browse 3D printing models by category
- 🧩 View detailed pages for each model
- 🧭 Category navigation with dynamic routing
- 💡 Server Components and App Router (Next.js 15)
- 💨 Styled with Tailwind CSS
- 🪄 Type-safe using TypeScript
- ⚙️ Fully static with mock JSON data

## 🗂️ Folder Structure

```
printforge/
├── app/
│   ├── 3d-models/
│   │   ├── [id]/page.tsx         // Dynamic route for model details
│   │   └── categories/[categoryName]/page.tsx // Models by category
│   ├── about/page.tsx            // About page
│   ├── components/               // Reusable UI components
│   ├── data/                     // Mock JSON data
│   ├── lib/                      // Data fetching and helper logic
│   ├── types/                    // Shared TypeScript types
│   ├── globals.css               // Global styles
│   └── layout.tsx                // Root layout
├── public/                       // Static assets (images)
├── package.json
├── tsconfig.json
└── README.md
```

## 🧠 Key Components

### 🧩 `components/`

- `Navbar.tsx`, `NavLink.tsx` – Navigation UI
- `ModelCard.tsx`, `ModelsGrid.tsx` – Model display cards and layout
- `CategoriesNav.tsx` – Sidebar nav to filter models by category
- `Pill.tsx` – Small UI label component

### 📦 `data/`

- `models.json` – Array of 3D model data (id, name, image, category)
- `categories.json` – List of categories (slug, displayName)

### 📚 `lib/`

- `models.ts` – Get all models, by ID or by category
- `categories.ts` – Fetch all categories or a specific one by slug

## 🧪 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Data Source**: Static JSON files (can be swapped for real API later)
- **Image Optimization**: `next/image`

## 🔧 Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/printforge.git
cd printforge

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🧹 Linting

```bash
npm run lint
```

> This project uses ESLint with Next.js recommendations.

## 🖼️ Image Optimization

All images should be stored in the `public/` folder and loaded using the `next/image` component for performance optimization.

## 📁 Future Improvements

- 🔌 Replace JSON with real backend (e.g., Supabase, MongoDB)
- 📝 Form to submit new models


## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by [Anuj Kumar Maurya](https://github.com/codeXanu)
