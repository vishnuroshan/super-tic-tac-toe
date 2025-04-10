"use server";

import { customAlphabet } from "nanoid";

const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0O1I
const generateCode = customAlphabet(alphabet, 6); // 6-char code

export async function createRoomCode(): Promise<string> {
  const roomCode = generateCode();
  return roomCode;
}
