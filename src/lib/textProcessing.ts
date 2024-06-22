// lib/textProcessing.ts
import natural from "natural";

const tokenizer = new natural.WordTokenizer();

export const preprocessText = (text: string): string[] => {
  return tokenizer.tokenize(text.toLowerCase());
};
