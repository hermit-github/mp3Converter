import { z } from "zod";


export const AuthorSchema = z.object({
  id: z.number(),
  name: z.string(),
  bio: z.string(),
});

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: AuthorSchema,
  publishedDate: z.string().optional(),
});

export type Author = z.infer<typeof AuthorSchema>;
export type Book = z.infer<typeof BookSchema>;