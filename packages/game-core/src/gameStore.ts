import { createStore, useStore } from "zustand";
import { GameState } from "./types";
import { createNewGame, handleMove } from "./gameLogic";

interface GameStore {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  handleStateMove: (
    boardIndex: number,
    cellIndex: number,
    isBoardDisabled: boolean,
  ) => void;
  resetGame: () => GameState;
}

export const gameStore = createStore<GameStore>((set) => ({
  gameState: createNewGame(), // Initialize the game state
  setGameState: (state: GameState) => set({ gameState: state }), // Update game state
  handleStateMove: (
    boardIndex: number,
    cellIndex: number,
    isBoardDisabled: boolean,
  ) => {
    if (!isBoardDisabled) {
      set((state) => {
        const newState = handleMove(state.gameState, boardIndex, cellIndex);
        return { gameState: newState };
      });
    }
  },
  resetGame: () => {
    set({ gameState: createNewGame() });
    return createNewGame();
  }, // Reset game to initial state
}));

// const { gameState, setGameState, handleStateMove, resetGame } =
//   useStore(gameStore);
//
export const useGameStore = () => useStore(gameStore);
