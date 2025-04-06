type Player = "X" | "O";

export type PlayerCell = Player | null;

// A mini-board is a 3x3 grid (9 cells)
export type MiniBoard = PlayerCell[]; // Should always have length 9

// The status of each mini-board: in progress, won by X/O, or a draw
export type MiniBoardStatus = "in-progress" | "won-X" | "won-O" | "draw";

// Overall game state
export interface GameState {
  boards: MiniBoard[]; // 9 mini-boards (each mini-board is an array of 9 cells)
  boardStatus: MiniBoardStatus[]; // Status for each mini-board
  currentPlayer: Player; // "X" or "O"
  nextAllowedBoard: number | null; // The index of the mini-board that the next move must be played in (or null for free move)
  winner: Player | "draw" | null; // Overall winner, if any
}
