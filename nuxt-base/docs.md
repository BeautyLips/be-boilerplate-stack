# Docs

## Directory structure

- src/main.ts - main entry point
- src/app/App.vue - main App.vue file
- src/app/layouts - layouts
- src/app/pages - pages
- src/app/router - router settings
- src/shared/assets/styles/global.scss - settings and utilities that are available for components.
- src/shared/assets/styles/main.scss - settings for the root styles.
- src/shared/assets/styles/core - settings for core variables and mixins.
- src/shared/components/ui - components Shared
- src/shared/components/icons - icons as component with handle settings
- src/shared/components/story - Stories
- src/shared/stores - stores without business logic
- src/shared/tools - tools for project, with dependency for project
- src/shared/utils - utils reusable fns, without dependency for project
- src/shared/types - types global
- public - static files
- docs-generated - generated docs

## Naming

- AppExample or UIExample - Clean components based on props.
- TheExample or ContainerExample - Components with business logic and data fetching.
- useExample, useAppExample - Reusable functions with reactive data.
- useModelExample, useStoreExample - Reusable functions with reactive data for models or stores.
- useQueryExample - Functions for API calls.
- useContextExample - Functions for context with inject.

## Setting up linters

- Optionally: Set up your code editor to lint the code during the development process after saving the file.
- Pre-commit Hook: The lint command should auto-run in the pre-commit hook, but it is better to configure the editor
  to automatically format the file when saving.

## Resource

- https://github.com/tabrindle/envinfo - Report dev env
- https://volta.sh/ - Node version manager
- https://nuxt.com/docs/guide/directory-structure/env - Nuxt env structure
- https://nuxt.com/docs/getting-started/deployment - Nuxt deployment
- https://nuxt.com/docs/getting-started/configuration - Nuxt configuration
- https://vitejs.dev/guide/build.html - Vite build for production
- https://vuejs.org/guide/best-practices/production-deployment.html - Vue production & deployment
