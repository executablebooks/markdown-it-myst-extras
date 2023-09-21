import { describe, expect, it } from "vitest"
import fs from "node:fs"
import MarkdownIt from "markdown-it"
import { mystBlockPlugin, colonFencePlugin } from "../src"

/** Read a "fixtures" file, containing a set of tests:
 *
 * test name
 * .
 * input text
 * .
 * expected output
 * .
 *
 * */
function readFixtures(name: string): string[][] {
  const fixtures = fs.readFileSync(`tests/fixtures/${name}.md`).toString()
  return fixtures.split("\n.\n\n").map(s => s.split("\n.\n"))
}

describe("Parses MyST blocks", () => {
  readFixtures("block").forEach(([name, text, expected]) => {
    const mdit = MarkdownIt("commonmark").use(mystBlockPlugin)
    const rendered = mdit.render(text)
    it(name, () => expect(rendered.trim()).toEqual(`${expected}\n`.trim()))
  })
})

describe("Parses Colon Fences", () => {
  readFixtures("colon_fence").forEach(([name, text, expected]) => {
    const mdit = MarkdownIt("commonmark").use(colonFencePlugin)
    const rendered = mdit.render(text)
    it(name, () => expect(rendered.trim()).toEqual(`${expected}\n`.trim()))
  })
})
