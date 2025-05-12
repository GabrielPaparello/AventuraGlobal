// lib/fonts.ts
import { Roboto, Playwrite_DK_Loopet } from "next/font/google";

export const roboto = Roboto({
  weight: '400',
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
});

export const playwrite = Playwrite_DK_Loopet({
  weight: '400',
  style: 'normal',
  display: 'swap',
});
