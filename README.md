# Start Template

> A quick start template based on a frontend Monorepo architecture. 🚀

This is a modern and lightweight monorepo starter template built with **pnpm workspaces** and **Turborepo**. It comes pre-configured with a hyper-fast toolchain for TypeScript development.

## 📦 Features

- **Monorepo (pnpm workspaces)**: Manage multiple packages and applications in a single repository.
- **Task Orchestration (Turborepo)**: Fast and incremental build system with caching.
- **Hyper-fast Toolchain**:
  - `oxlint` for lightning-fast code linting (replacing traditional ESLint).
  - `oxfmt` for extremely fast code formatting.
- **TypeScript**: Configured with modern best practices (`esnext`, `bundler` resolution, `isolatedDeclarations` for fast dts generation).
- **TypeScript Execution**: `tsx` for running standard TypeScript scripts out of the box.
- **Bundling (`@template/tools` example)**: Dual-format packing (ESM & CJS) using `tsdown`.

## 🚀 Quick Start via `giget`

You can quickly scaffold a new project using this template with `npx giget`.

```bash

# Create a new project named "my-project" using this template

npx giget@latest https://github.com/ffgenius/template-starter.git my-project

# Navigate to the new project

cd my-project

# Install dependencies (pnpm is recommended and required by the workspace)

pnpm install
```

## 🛠️ Available Scripts

From the root of the repository, you can run the following commands:

- `pnpm run dev`: Starts the development environments across all packages in parallel.
- `pnpm run build`: Builds all packages utilizing Turborepo's caching.
- `pnpm run lint`: Runs `oxlint` to check for code issues instantly.
- `pnpm run lint:fix`: Auto-fixes standard code issues using `oxlint`.
- `pnpm run format`: Formats code using `oxfmt`.

## 📄 License

[MIT](./LICENSE)
