<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Playwright MCP cleanup

After every Playwright MCP testing session, always clean up generated artifacts:

```
Remove-Item -Path ".playwright-mcp" -Recurse -Force
Remove-Item -Path "homepage-*.png" -Force
Remove-Item -Path "ikonic-*.png" -Force
```

The `.playwright-mcp/` directory contains snapshot YAMLs, console logs, and screenshots. Root-level `homepage-*.png` and `ikonic-*.png` files are screenshots saved during earlier sessions. All of these are in `.gitignore` and should never be committed. Clean them up at the end of each testing session to keep the working tree clean.
