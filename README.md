# cra-killer
A demonstration of four different implementations of client side routing using React. First, with React Router 5.3.4 and useEffect. Second, with React Router 6.4.3 and useEffect. Third, with React Router 6.4.3. and Remix-style data loading. And, finally, with Tanstack Router and their native data loading tech.

## Clone repo

```bash
git clone https://github.com/jazzypants1989/cra-killer.git
```
## Install dependencies

```bash
pnpm i
```

Or you can use `ni`:

```
npm i -g @antfu/ni && ni
```

## Run the app

```bash
pnpm --filter=rr5-cra start
```

Or you can use `ni`:

```bash
nr -C rr5-cra start
```

and replace `rr5-cra` with `rr6-cra`, `rr6-data-cra`, or `tanstack-cra` to run the other apps.

## Fancy demo

Run any one of those and be amazed:

```bash
pnpm start
pnpm start-vite
pnpm start-astro
```
