<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repo quickstart

- Stack: Next.js 16.2.1, React 19, TypeScript (strict mode), Tailwind CSS v4.
- Main app entrypoints are `app/layout.tsx` (global metadata/font + `globals.css`) and `app/page.tsx` (home route).
- Shared constants live in `constants/index.ts`; reusable helpers are in `lib/utils.ts` (`cn`, `getSubjectColor`).
- Ambient project types are declared in `types/index.d.ts` and `types/vapi.d.ts`.
- Use npm scripts from `package.json`: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Path alias `@/*` is configured in `tsconfig.json`; prefer aliased imports like `@/constants`.
- Styling is centralized in `app/globals.css` with `@import "tailwindcss"` and `@import "tw-animate-css"`; ensure `tw-animate-css` is installed if CSS import resolution fails.
- `README.md` is still the default create-next-app template; rely on source files for current project behavior.
