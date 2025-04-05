export type Player = "X" | "O";

export function togglePlayer(p: Player): Player {
  return p === "X" ? "O" : "X";
}

export function greet(name: string) {
  return `Hello, ${name}!`;
}
