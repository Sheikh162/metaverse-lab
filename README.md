# NetVerse Labs 🌐

**NetVerse Labs** is an immersive 2D virtual metaverse designed for education, collaboration, and interactive learning. Built with the latest web technologies, it features a retro-futuristic "NetVerse OS" interface where users can navigate a virtual campus, interact with stations, communicate in real-time, and access AI-powered tools.

![NetVerse Labs Banner](https://via.placeholder.com/1200x400?text=NetVerse+Labs+Preview)

## 🚀 Features

- **Interactive 2D World**: Explore a dynamic virtual campus with a custom-built game engine using `framer-motion`.
- **Real-time Multiplayer**: See and interact with other users in real-time.
- **Role-Based Experience**: Distinct interfaces and capabilities for **Students** and **Teachers** (Admins).
- **Interactive Stations**: Approach stations to trigger specific tools:
  - **Coding Stations**: Integrated Monaco Editor for coding exercises.
  - **AI Tutors**: Google Gemini-powered NPC teachers for personalized assistance.
  - **Video Conferencing**: Jitsi-powered meeting rooms.
- **Retro "NetVerse OS" UI**: A stylish, responsive HUD with minimap, dashboard, and notifications.
- **Secure Authentication**: Firebase-powered user management.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives), [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Backend & Auth**: [Firebase](https://firebase.google.com/)
- **AI**: [Google Generative AI](https://ai.google.dev/) (Gemini)
- **Real-time**: Custom hooks & Firebase Realtime Database/Firestore

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages
│   ├── lab/              # Main game environment
│   └── page.tsx          # Landing page
├── components/
│   ├── game/             # Core game engine (Player, Map, Engine)
│   ├── hud/              # Heads-up display components
│   ├── ui/               # Reusable UI components (Shadcn)
│   └── landing/          # Landing page sections
├── hooks/                # Custom hooks (useMultiplayer, useAuth)
├── lib/                  # Utilities and game configuration
└── public/               # Static assets
```

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/metaverse-lab.git
   cd metaverse-lab
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory based on `.env.example`. You will need credentials for:
   - Firebase (API Key, Auth Domain, Project ID, etc.)
   - Google Generative AI (API Key)

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
