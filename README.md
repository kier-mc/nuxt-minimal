# Nuxt Minimal Scaffold

A simple, very minimal Nuxt starter/scaffold tailored to my personal preferences and designed to speed up development with new projects and eliminate some boilerplate. I have made the repo public in case others would like to use it too. It comes with Nuxt layout/pages set up in advance and a basic file structure for the stylesheets located in the assets folder. It also leverages the useSeoMeta composable in app.vue, and provides it with a basic data object defined in the utils directory.

## Instructions

If you don't want to use Bun, delete the lockfile in the root directory and replace the commands beneath with the equivalents for your package manager of choice.

1. Clone the repo and install the dependencies

```bash
git clone https://github.com/kier-mc/nuxt-minimal
bun install
```

2. Launch the development server:

```bash
bun run dev
```