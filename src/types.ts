import type { ReactNode } from 'react';
import { GoogleGenAI } from "@google/genai";

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
}

export type ImageSize = "1K" | "2K" | "4K";

export const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not found");
  return new GoogleGenAI({ apiKey });
};
