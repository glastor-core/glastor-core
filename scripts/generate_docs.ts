#!/usr/bin/env -S deno run -A
// deno-lint-ignore-file no-import-prefix no-unversioned-import
/**
 * @file scripts/generate_docs.ts
 * @description Automated documentation and llms.txt generator using @glastor-dev/readmegen
 */

import { analyzeProject } from "https://jsr.io/@glastor-dev/readmegen/2.2.0/src/project/analyze.ts";
import { renderTemplate } from "https://jsr.io/@glastor-dev/readmegen/2.2.0/src/templates/render.ts";
import { sanitizeGeneratedMarkdown } from "jsr:@glastor-dev/readmegen";

async function fetchTemplate(name: string): Promise<string> {
  const url = `https://jsr.io/@glastor-dev/readmegen/2.2.0/src/templates/${name}.md`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load template ${name}: ${res.statusText}`);
  }
  return await res.text();
}

async function main() {
  console.log("🔍 Analyzing project AST and configuration with @glastor-dev/readmegen...");
  const analysis = await analyzeProject({ projectRoot: "." });
  const data = analysis.templateData;

  // 1. Generate llms.txt standard
  if (data.llmsTxt) {
    await Deno.writeTextFile("llms.txt", String(data.llmsTxt));
    console.log("✅ Generated llms.txt (AI documentation standard)");
  }

  // 2. Render modern technical README
  const templateContent = await fetchTemplate("modern");
  let rendered = renderTemplate(templateContent, data);
  rendered = sanitizeGeneratedMarkdown(rendered);

  const isCheck = Deno.args.includes("--check");
  const outputFile = Deno.args.find((arg) => arg.startsWith("--output="))?.split("=")[1] ||
    "README.generated.md";

  if (isCheck) {
    console.log(`🔎 Validating documentation output: ${outputFile}...`);
    try {
      const existing = await Deno.readTextFile(outputFile);
      if (existing !== rendered) {
        console.warn(
          `⚠️ ${outputFile} is out of sync with codebase. Run 'deno task docs' to update.`,
        );
      } else {
        console.log(`✨ ${outputFile} is perfectly in sync!`);
      }
    } catch {
      console.log(`ℹ️ Output ${outputFile} not yet written. Writing fresh copy.`);
      await Deno.writeTextFile(outputFile, rendered);
    }
  } else {
    await Deno.writeTextFile(outputFile, rendered);
    console.log(`✅ Generated technical specification at ${outputFile}`);
  }

  console.log("🎉 Documentation generation complete.");
}

if (import.meta.main) {
  await main();
}
