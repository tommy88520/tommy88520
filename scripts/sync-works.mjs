#!/usr/bin/env node
// Regenerates the "🌙 更多 side project" block in README.md (between the
// WORKS:START / WORKS:END markers) from the blog's public /api/works.
// Run by .github/workflows/sync-works.yml on a daily schedule, or manually
// with `node scripts/sync-works.mjs`.

import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const API_URL = "https://www.huangyanming.com/api/works"
const README_PATH = fileURLToPath(new URL("../README.md", import.meta.url))
const START_MARKER = "<!-- WORKS:START -->"
const END_MARKER = "<!-- WORKS:END -->"

// These three already have hand-written, detailed write-ups elsewhere in
// this README (with their own "🛠 比較值得一提的細節" bullets) — don't
// duplicate them in the auto-synced short list.
const EXCLUDED_SLUGS = new Set(["ptt-macshop-bot", "come-anc13", "focus-island"])

async function main() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`fetch ${API_URL} failed: ${response.status}`)
  }

  const { works } = await response.json()

  const lines = works
    .filter((work) => !EXCLUDED_SLUGS.has(work.slug))
    .map((work) => {
      const title = work.url ? `[${work.title}](${work.url})` : work.title
      return `- **${title}**——${work.description}`
    })

  const block =
    lines.length > 0 ? lines.join("\n") : "_(目前沒有其他 side project)_"

  const readme = readFileSync(README_PATH, "utf-8")
  const pattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`)

  if (!pattern.test(readme)) {
    throw new Error(
      `README.md 裡找不到 ${START_MARKER} / ${END_MARKER} 標記,先確認標記還在`,
    )
  }

  const next = readme.replace(
    pattern,
    `${START_MARKER}\n${block}\n${END_MARKER}`,
  )

  writeFileSync(README_PATH, next)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
