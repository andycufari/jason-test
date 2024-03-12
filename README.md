# Reproduction for Next.js `.d.ts` Import Issue

This repository is a minimal reproduction of an issue encountered when importing the `@cm64/jasonjs` package into a Next.js project.

## Issue Description

The project throws a "Module parse failed: Unexpected token" error when trying to import components from the `@cm64/jasonjs` package, pointing to `.d.ts` files.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.
4. Navigate to `http://localhost:3000` to see the issue in action.

## Expected Behavior

The components from `@cm64/jasonjs` should be imported without any parsing errors.

## Actual Behavior

Webpack fails to parse `.d.ts` files from the package, resulting in a build error.
