import { createStore, useStore } from "zustand";
import { devtools } from "zustand/middleware";
import { GameState, PlayerCell } from "./types";
import { createNewGame, handleMove } from "./gameLogic";

interface GameStore {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  handleStateMove: (
    boardIndex: number,
    cellIndex: number,
    isBoardDisabled: boolean,
  ) => void;
  playerXWins: number;
  playerOWins: number;
  draws: number;
  recordGameResult: (winner: "X" | "O" | "draw") => void;
  resetStats: () => void;
  resetGame: () => GameState;
}

export const gameStore = createStore<GameStore>()(
  devtools((set, get) => ({
    gameState: createNewGame(), // Initialize the game state
    setGameState: (state: GameState) => set({ gameState: state }), // Update game state
    handleStateMove: (
      boardIndex: number,
      cellIndex: number,
      isBoardDisabled: boolean,
    ) => {
      if (!isBoardDisabled) {
        set((state) => {
          const current = get();
          const newState = handleMove(state.gameState, boardIndex, cellIndex);
          // If game just ended, record result
          if (newState.winner && !current.gameState.winner) {
            current.recordGameResult(newState.winner);
          }
          return { gameState: newState };
        });
      }
    },

    resetGame: () => {
      set({ gameState: createNewGame() });
      return createNewGame();
    }, // Reset game to initial state
    // 👇 New stats
    playerXWins: 0,
    playerOWins: 0,
    draws: 0,
    recordGameResult: (winner) => {
      if (winner === "X") {
        set((state) => ({ playerXWins: state.playerXWins + 1 }));
      } else if (winner === "O") {
        set((state) => ({ playerOWins: state.playerOWins + 1 }));
      } else if (winner === "draw") {
        set((state) => ({ draws: state.draws + 1 }));
      }
    },
    resetStats: () => set({ playerXWins: 0, playerOWins: 0, draws: 0 }),
  })),
);

export const useGameStore = () => useStore(gameStore);

// export const useGameStore = (selector?: (state: GameStore) => any) => {
//   if (!selector) {
//     return useStore(gameStore);
//   }
//   return useStore(gameStore, selector);
// };
