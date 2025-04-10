# 🧠 Super Tic Tac Toe - Technical Documentation

Welcome to the internal technical documentation for **Super Tic Tac Toe**. This project is a modern, AI-assisted take on the classic game, built to support both local and online multiplayer with an emphasis on clean architecture, type safety, and responsive UX.

---

## 📁 Project Overview

A real-time multiplayer web game inspired by **Super Tic Tac Toe** (a 3x3 grid of mini 3x3 boards). Players must win mini-boards to claim macro-board victory. Built for fun and learning, this is a fully vibe-coded project using ChatGPT & Claude, deployed on Vercel.

**Live URL**: [super-tic-tac-toe-three.vercel.app](https://super-tic-tac-toe-three.vercel.app)

---

## 🏗️ Tech Stack

### ⚙️ Core Frameworks

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (for state management)
- **Turborepo** (monorepo setup)
- **PNPM** (workspace and package manager)
- **Vercel** (hosting + CI/CD)

### 🧠 AI Tools Used

- **ChatGPT & Claude** for architecture, code generation, refactoring, testing
- **Readdy.io** for UI prototyping (special thanks to Vijay Anand)

---

## 🧱 Project Structure (Monorepo)

```txt
super-tic-tac-toe/
├── apps/
│   └── web/               # Next.js frontend
├── packages/
│   └── game-core/         # Pure game logic, fully reusable
├── public/
├── styles/
│   └── globals.css        # Includes Tailwind theme setup
├── turbo.json             # Build config
├── tsconfig.base.json     # Shared TS config
└── pnpm-workspace.yaml
```

---

## 🧠 Architecture Decisions

### 📦 Separation of Concerns

- `game-core` contains all shared logic: types, game rules, utility functions
- `apps/web` handles UI, state, multiplayer logic (via Zustand + sockets)
- Game rendering and logic are fully decoupled: no React inside `game-core`

### 🧼 Type-Safety

- All core functions use precise TypeScript types
- `PlayerCell`, `GameState`, `MiniBoardStatus` etc. are declared in `game-core/types.ts`

### 💡 React + Zustand

- Zustand manages game state in the frontend
- `useGameStore()` abstracts access to state and actions
- Zustand store lives in `game-core`, allowing consistent logic between local and online modes

---

## 🎮 Game Flow (Local)

1. User opens `/local`
2. `GameContainer` renders:
   - `GameInfo` (current player, board wins)
   - `GameBoard` with 9 MiniBoards
   - `GameControls` (Restart, Rules)
3. Zustand tracks:
   - `gameState`
   - `xMiniWins`, `oMiniWins`
4. On move:
   - `handleStateMove()` is called
   - Game logic in `game-core` updates board state
   - UI re-renders affected MiniBoard only

---

## 🌐 Game Flow (Online - WIP)

1. Player visits `/online`
2. Can create or join a room
3. Room creator receives a room code
4. Second player joins via URL
5. `OnlineGameLoader` shows waiting screen until both are present
6. Suspense + API mock simulates join delay
7. Future: Socket.io manages real-time game sync

---

## ✨ UI/UX Features

- Responsive layout (mobile-first)
- Dark & light theming possible via Tailwind tokens
- Win highlights (shadow effects)
- Current player info always visible
- Toasts, modals, and transitions planned

---

## 🧪 Testing & Dev Experience

- `pnpm dev` for local dev
- `pnpm build` uses Turbo + Next.js
- ESLint + TypeScript enforced
- Zustand debug-friendly (Redux DevTools compatible)

---

## 🚀 Deployment

- Hosted on [Vercel](https://vercel.com)

### 🌍 Deployment Notes

- The deployment process involved several iterations due to turborepo and monorepo complexities.
- Issues with resolving `tsconfig.base.json` paths and `pnpm` workspace quirks were resolved by carefully adjusting the folder structure and build commands.
- Vercel runs `pnpm install` and `pnpm run build`, using the `apps/web` project as the entry point.
- Build: `next build` via `apps/web`
- Turbo handles per-package builds
- Issues with monorepo resolved by restructuring `tsconfig`, `.vercel`, and `turbo.json`

---

## 🧭 Future Milestones

### 🔁 Multiplayer: Sync Model (Planned)

- One source of truth: server or host device
- Clients emit actions, not full state
- Server broadcasts updated `GameState`

### 🔐 Multiplayer: Player Roles (Planned)

- Assigned via server: `Player X` = room creator, `Player O` = joiner
- Role is used to determine allowed interaction per turn

### 🚦 Multiplayer: Event Protocol (Planned)

- `player-joined`
- `player-move`
- `game-state`
- `player-left`

### ✅ State Resumption (Planned)

- Game state can be hydrated on reconnect
- Zustand store supports external hydration
- Use case: Player reloads or rejoins `/room/[code]`

---

## 🙌 Credits & Acknowledgements

- Built entirely with ChatGPT & Claude
- UI prototyping via [Readdy.io](https://readdy.io) (thanks to Vijay Anand)
- Vibe-coded, but with architectural discipline

---

Last updated: April 10, 2025
