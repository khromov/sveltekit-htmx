# SvelteKit + htmx

This repo shows how it's possible to combine SvelteKit and htmx.

With SvelteKit you get as close as possible to developing in normal HTML, while enjoying modern amenities like support for automatic scoped CSS, TypeScript and dozens of UI libraries like Melt UI and Flowbite out of the box!

### How does it work?

We disable the SvelteKit client side rendering by setting `export const csr = false;` in the root layout. We then load htmx and use it normally. Small bundle sizes + interactivity thanks to htmx = ❤️

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Previewing

To preview your app.

```bash
npm run preview
```

## Building

To create a production version of your app:

```bash
npm run build
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
