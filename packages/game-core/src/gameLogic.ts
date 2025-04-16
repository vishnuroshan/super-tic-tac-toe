// packages/game-core/src/gameLogic.ts

import { GameState, PlayerCell, MiniBoard, MiniBoardStatus } from "./types";
import { WINNING_COMBOS } from "./constants";

export function togglePlayer(p: PlayerCell): PlayerCell {
  return p === "X" ? "O" : "X";
}

// Create a new game state
export function createNewGame(): GameState {
  return {
    boards: Array(9)
      .fill(null)
      .map(() => Array(9).fill(null)),
    boardStatus: Array(9).fill("in-progress"),
    currentPlayer: "X",
    nextAllowedBoard: null,
    winner: null,
  };
}

// Check for a win on a mini-board
export function checkMiniBoardWin(
  board: MiniBoard,
): PlayerCell | "draw" | null {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // "X" or "O"
    }
  }
  // Check for draw: if board is full but no winner
  if (board.every((cell) => cell !== null)) {
    return "draw";
  }
  return null;
}

// Check overall game winner from mini-board statuses
export function checkOverallWinner(
  boardStatus: MiniBoardStatus[],
): PlayerCell | "draw" | null {
  for (const [a, b, c] of WINNING_COMBOS) {
    if (
      boardStatus[a] === "won-X" &&
      boardStatus[b] === "won-X" &&
      boardStatus[c] === "won-X"
    ) {
      return "X";
    }
    if (
      boardStatus[a] === "won-O" &&
      boardStatus[b] === "won-O" &&
      boardStatus[c] === "won-O"
    ) {
      return "O";
    }
  }
  if (boardStatus.every((status) => status !== "in-progress")) {
    return "draw";
  }
  return null;
}

// Process a move on the game state
export function handleMove(
  state: GameState,
  boardIndex: number,
  cellIndex: number,
): GameState {
  // Clone state for immutability
  const newState: GameState = {
    ...state,
    boards: state.boards.map((b) => [...b]),
    boardStatus: [...state.boardStatus],
  };

  // IMPORTANT - Check nextAllowedBoard constraint
  if (
    newState.nextAllowedBoard !== null &&
    boardIndex !== newState.nextAllowedBoard
  ) {
    console.log("Invalid move: nextAllowedBoard constraint not met");
    return state; // Return original state, not newState, to avoid reference issues
  }

  // Validate move: if game is over or mini-board already won/draw, ignore
  if (newState.winner || newState.boardStatus[boardIndex] !== "in-progress") {
    return newState;
  }
  // Validate cell is empty
  if (newState.boards[boardIndex][cellIndex] !== null) {
    return newState;
  }

  // Place current player's mark
  newState.boards[boardIndex][cellIndex] = newState.currentPlayer;

  // Update the mini-board status
  const miniResult = checkMiniBoardWin(newState.boards[boardIndex]);
  if (miniResult === "X" || miniResult === "O") {
    newState.boardStatus[boardIndex] = `won-${miniResult}` as MiniBoardStatus;
  } else if (miniResult === "draw") {
    newState.boardStatus[boardIndex] = "draw";
  }

  // Check overall winner based on mini-board statuses
  newState.winner = checkOverallWinner(newState.boardStatus);

  // Determine next allowed mini-board
  // If the targeted mini-board is already won/drawn, allow free move (null)
  if (newState.boardStatus[cellIndex] !== "in-progress") {
    newState.nextAllowedBoard = null;
  } else {
    newState.nextAllowedBoard = cellIndex;
  }

  // Toggle current player if game isn't over
  if (!newState.winner) {
    newState.currentPlayer = newState.currentPlayer === "X" ? "O" : "X";
  }

  return newState;
}

// Reset the game state
export function resetGame(): GameState {
  return createNewGame();
}
