# 🕹️ Super Tic Tac Toe

A scalable, type-safe, monorepo-based implementation of Super Tic Tac Toe using Next.js, PNPM Workspaces, and shared core game logic.

---

## 🧱 Tech Stack

- ⚡️ Monorepo: [PNPM Workspaces](https://pnpm.io/workspaces), [Turborepo](https://turbo.build/)
- 🎮 Frontend: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- 🔁 Shared Logic: Type-safe `game-core` package
- 🚀 Deployment: TBD (e.g. Vercel, Railway, Fly.io)

---

## 📁 Folder Structure

.
└── super-tic-tac-toe/
    ├── apps/
    │   └── web/  ← Next.js frontend app/
    │       ├── app/
    │       ├── components/
    │       ├── public/
    │       ├── styles/
    │       ├── tsconfig.json
    │       └── package.json
    ├── packages/
    │   └── game-core/  ← Shared game logic/
    │       ├── src/
    │       │   └── index.ts
    │       ├── tsconfig.json
    │       └── package.json
    ├── .gitignore
    ├── package.json  ← Root, with workspaces
    ├── pnpm-workspace.yaml
    └── turbo.json

---

## 🛠️ Getting Started

```bash
pnpm install
pnpm dev
```

---

### To build game-core:

```bash
pnpm --filter game-core build
```

---

### To run the app:

```bash
pnpm --filter web dev
```

---

### To check type safety across the monorepo:

```bash
pnpm run typecheck
```

---


# Made with ❤️ and heavy 🤖 help
