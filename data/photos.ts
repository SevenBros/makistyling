import raw from "./photos.json";

export type Photo = { src: string; thumb: string; w: number; h: number };
export const photos = raw as Photo[];
