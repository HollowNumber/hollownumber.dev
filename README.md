# hollownumber.dev

My portfolio site, built with [Astro](https://astro.build).

```sh
bun install
bun run dev      # localhost:4321
bun run build    # outputs to dist/
```

Content lives in `src/content/`: experience in `experience.yml`, one Markdown file per project in `projects/`.

The link preview image `public/og.png` is rendered from `src/assets/og.svg`:

```sh
node -e "require('sharp')('src/assets/og.svg').png().toFile('public/og.png')"
```
