import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.yml"),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string(),
    stack: z.array(z.string()).default([]),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
