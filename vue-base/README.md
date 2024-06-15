# Vue Boilerplate - Base

---

## Report env

```bash
# check env info
npm run settings:envinfo
```

## Node version manager

```bash
# look pinned version node in package.json file
volta install node@[verstionOnYourProject]
```

## Executable files

```sh
npm run settings:executable
```

## Install a project

```bash
# clean install with deps from package.lock
npm ci
```

```bash
# or install with deps package.json & update package.lock
npm install
```

```bash
# optional
npm audit
```

## Update with npm-check-updates

```bash
# if not install package install it
npm install -g npm-check-updates
```

```bash
# check version packages
npm run update
```

## Npm commands

```sh
# build with type check
npm run build
```

```sh
# build without type check
npm run build:only
```

## Info

- https://github.com/tabrindle/envinfo - Report dev env
- https://volta.sh/ - Node version manager
- https://vitejs.dev/guide/build.html - Vite build for production
- https://vuejs.org/guide/best-practices/production-deployment.html - Vue production & deployment
- See more in package.json, docs.md files
