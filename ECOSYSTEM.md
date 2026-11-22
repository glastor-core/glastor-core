<div align="center">

# ⚡ GLASTOR® Core — Ecosystem Catalog

**Complete directory of open-source Rust systems, AI privacy tools, DevSecOps engines, Edge
runtimes, and distribution channels engineered by [glastor.es](https://glastor.es).**

<p align="center">
  <a href="README.md">← Back to README</a> •
  <a href="#flagship">Flagship Projects</a> •
  <a href="#rust-systems">Rust Systems & AI</a> •
  <a href="#edge-devsecops">Edge & DevSecOps</a> •
  <a href="#governance">Governance & Distribution</a> •
  <a href="#badges">Official Badges</a>
</p>

---

</div>

<a id="flagship"></a>

## 🚀 Flagship Projects

Our two primary production-grade Rust security and AI privacy engines, distributed across
`crates.io`, `PyPI`, `npm`, Go, Homebrew, GitHub Marketplace, and WebAssembly:

| Repository                                                 | Purpose                                                                                             | Key Benchmark / SLA                                                          | Status & Distribution                                                                                                                                                                                                                                                                                                                                             | Governance                                                                     |
| :--------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **[`pii-veil`](https://github.com/glastor-core/pii-veil)** | Sub-millisecond reversible PII & secret anonymizer for LLMs, AI agents, MCP & real-time SSE streams | `165 µs` prompt latency (`212x` vs Presidio) · `69.6 µs` SSE · `< 15 MB` RAM | [![Live Demo](https://img.shields.io/badge/Live%20Demo-pii--veil.glastor.es-00c896?style=flat-square)](https://pii-veil.glastor.es) [![crates.io](https://img.shields.io/crates/v/pii-veil-core?style=flat-square&color=orange)](https://crates.io/crates/pii-veil-core)                                                                                          | [Security Team](https://github.com/glastor-core/.github/blob/main/SECURITY.md) |
| **[`specter`](https://github.com/glastor-core/specter)**   | Zero-compiler polyglot AST API contract differ, Trojan Breaking-Change detector & SemVer gatekeeper | `< 5 ms` Rust + TypeScript AST diff · SARIF 2.1.0 & CycloneDX 1.5 SBOM       | [![Marketplace](https://img.shields.io/badge/GitHub-Marketplace-blue?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/marketplace/actions/glastor-specter-polyglot-ast-api-contract-semver-gatekeeper) [![crates.io](https://img.shields.io/crates/v/specter-cli?style=flat-square&color=orange)](https://crates.io/crates/specter-cli) | [Security Team](https://github.com/glastor-core/.github/blob/main/SECURITY.md) |

---

<a id="rust-systems"></a>

## 🦀 Rust Systems, Security & AI Infrastructure

Zero-bloat, memory-safe Rust libraries, CLIs, and engines designed for low-latency systems, LLM
inference, and supply-chain security:

| Repository                                                       | Purpose                                                                                              | Key Benchmark / SLA                                                | Status / Registry                                                                                                                 | Governance                                                                       |
| :--------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **[`byte-gauge`](https://github.com/glastor-core/byte-gauge)**   | Rust SIMD Binary & Wasm Auditor, `checksec` hardening, CycloneDX 1.5 SBOM & SARIF 2.1.0              | `< 8 ms` SIMD ELF/PE/Mach-O/Wasm hardening audit                   | [![crates.io](https://img.shields.io/crates/v/byte-gauge?style=flat-square&color=10b981)](https://crates.io/crates/byte-gauge)    | [Security Team](https://github.com/glastor-core/.github/blob/main/SECURITY.md)   |
| **[`spec-stream`](https://github.com/glastor-core/spec-stream)** | Model-agnostic Speculative Decoding & Paged KV-Cache engine in pure Rust for LLM inference           | Zero-copy paged KV-Cache · `no_std`-friendly quantization          | [![Docs](https://img.shields.io/badge/Docs-GitHub%20Pages-0ea5e9?style=flat-square)](https://glastor-core.github.io/spec-stream/) | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`hyper64`](https://github.com/glastor-core/hyper64)**         | Zero-allocation wide-vector SIMD Base64 engine (`AVX-512BW`, `AVX2`, `NEON`, `WASM SIMD128`)         | Formal in-place decoding · `#![no_std]` embedded & Wasm ready      | [![Docs](https://img.shields.io/badge/Docs-GitHub%20Pages-f59e0b?style=flat-square)](https://glastor-core.github.io/hyper64/)     | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`strata`](https://github.com/glastor-core/strata)**           | Zero-Node.js headless accessibility & atomic CSS engine for Rust web apps (Leptos, Dioxus, Yew)      | Pure Rust compile-time CSS · WCAG AA headless primitives           | [![Rust](https://img.shields.io/badge/Rust-Web%20UI-ce422b?style=flat-square)](https://github.com/glastor-core/strata)            | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`vektor`](https://github.com/glastor-core/vektor)**           | Safe-Rust MCP server, sub-ms hook engine & DevSecOps CLI auditor (Secrets, PII, Trojan Guard, SARIF) | Sub-millisecond hook evaluation · SARIF 2.1.0 & CycloneDX 1.5 SBOM | [![MCP](https://img.shields.io/badge/Engine-Vektor%20MCP-8b5cf6?style=flat-square)](https://github.com/glastor-core/vektor)       | [Security Team](https://github.com/glastor-core/.github/blob/main/SECURITY.md)   |

---

<a id="edge-devsecops"></a>

## 🌐 Edge Runtimes, CI Orchestration & DevSecOps

High-throughput TypeScript/Deno/Bun platforms, predictive CI engines, and reproducible
multi-language benchmarks:

| Repository                                                         | Purpose                                                                                                 | Key Benchmark / SLA                              | Status                                                                                                                                 | Governance                                                                       |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **[`glastor-core`](https://github.com/glastor-core/glastor-core)** | Core engine runtime, stateful pipelines, and modular kernel                                             | `< 0.5 ms` pipeline dispatch · Zero-bloat kernel | [![Active](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](https://github.com/glastor-core/glastor-core)    | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`nemesis`](https://github.com/glastor-core/nemesis)**           | Automated DevSecOps auditing, repo hygiene, auto-fix & compliance CLI/Action                            | `< 5 s` full repo audit · Zero-config auto-fix   | [![Audited](https://img.shields.io/badge/Audit-Passed-purple?style=flat-square)](https://github.com/glastor-core/nemesis)              | [Security Team](https://github.com/glastor-core/.github/blob/main/SECURITY.md)   |
| **[`vortex`](https://github.com/glastor-core/vortex)**             | AST-driven predictive CI orchestrator, barrel pruner, LPT splitter & FinOps                             | `~60%` CI runtime & Actions FinOps reduction     | [![Predictive CI](https://img.shields.io/badge/Engine-Vortex%20v1.1-06b6d4?style=flat-square)](https://github.com/glastor-core/vortex) | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`zerho`](https://github.com/glastor-core/zerho)**               | High-performance documentation engine for Deno 2 & Edge with native `llms.txt`                          | `< 15 ms` Edge TTFB · Native `llms.txt` index    | [![Edge](https://img.shields.io/badge/Runtime-Deno%202%20%2F%20Edge-000000?style=flat-square)](https://github.com/glastor-core/zerho)  | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`medusa`](https://github.com/glastor-core/medusa)**             | Resilient Edge API Gateway & Caching Proxy with Circuit Breaker & Deno KV                               | `< 1.8 ms` proxy overhead · Single-Flight KV     | [![Gateway](https://img.shields.io/badge/Edge-API%20Gateway-emerald?style=flat-square)](https://github.com/glastor-core/medusa)        | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`hyper-flow`](https://github.com/glastor-core/hyper-flow)**     | Ultra-high-throughput Edge AI API built with Hono, Bun & OpenAPI 3.1                                    | `10K+ req/s` Edge AI routing · OpenAPI 3.1       | [![Performance](https://img.shields.io/badge/Edge-AI%20Runtime-f59e0b?style=flat-square)](https://github.com/glastor-core/hyper-flow)  | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |
| **[`benchmarks`](https://github.com/glastor-core/benchmarks)**     | Reproducible apples-to-apples HTTP & systems benchmark suite (Rust/Axum, Go/Gin, Node/Fastify, FastAPI) | Identical container quotas · Automated CI runs   | [![Benchmarks](https://img.shields.io/badge/Suite-Reproducible-0ea5e9?style=flat-square)](https://github.com/glastor-core/benchmarks)  | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS) |

---

<a id="governance"></a>

## 🏛 Governance, Distribution & Tooling

Organization-wide standards, package distribution channels, and autonomous documentation tooling:

| Repository                                                         | Purpose                                                                  | Key Benchmark / SLA                            | Status                                                                                                                                                        | Governance                                                                            |
| :----------------------------------------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| **[`.github`](https://github.com/glastor-core/.github)**           | Organization-wide governance, reusable workflows & engineering standards | `100%` Community Health & SLSA provenance      | [![Standards](https://img.shields.io/badge/Type-Org%20Health-blue?style=flat-square)](https://github.com/glastor-core/.github)                                | [Steering Committee](https://github.com/glastor-core/.github/blob/main/GOVERNANCE.md) |
| **[`homebrew-tap`](https://github.com/glastor-core/homebrew-tap)** | Official Homebrew Tap (`brew tap glastor-core/tap`) for GLASTOR® CLIs    | Instant macOS & Linux binary distribution      | [![Homebrew](https://img.shields.io/badge/Homebrew-Tap-fbb040?style=flat-square&logo=homebrew&logoColor=white)](https://github.com/glastor-core/homebrew-tap) | [Core Maintainers](https://github.com/glastor-core/.github/blob/main/CODEOWNERS)      |
| **[`glastor-dev`](https://github.com/glastor-dev/glastor-dev)**    | Autonomous Living Profile & AST README Engine (`@glastor-dev/readmegen`) | `0-WASM` TS AST parser · 4R Code Review Engine | [![JSR](https://jsr.io/badges/@glastor-dev/readmegen)](https://jsr.io/@glastor-dev/readmegen)                                                                 | [Lead Architect (@glastor-dev)](https://github.com/glastor-dev)                       |

---

<a id="badges"></a>

## 🏅 Official Ecosystem Badges (Add to Your README)

Show the community that your repository is protected by the **GLASTOR® Core** engineering suite.
Copy and paste any badge below into your project's `README.md`:

| Tool              | Preview                                                                                                                                                               | Markdown Snippet                                                                                                                                                        |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **pii-veil**      | [![PII Privacy: pii-veil](https://img.shields.io/badge/PII%20Privacy-pii--veil-00c896?style=for-the-badge)](https://github.com/glastor-core/pii-veil)                 | `[![PII Privacy: pii-veil](https://img.shields.io/badge/PII%20Privacy-pii--veil-00c896?style=for-the-badge)](https://github.com/glastor-core/pii-veil)`                 |
| **Specter AST**   | [![API Contract: Specter](https://img.shields.io/badge/API%20Contract-Specter%20AST-8b5cf6?style=for-the-badge)](https://github.com/glastor-core/specter)             | `[![API Contract: Specter](https://img.shields.io/badge/API%20Contract-Specter%20AST-8b5cf6?style=for-the-badge)](https://github.com/glastor-core/specter)`             |
| **GLASTOR® Core** | [![Powered by GLASTOR Core](https://img.shields.io/badge/Powered%20By-GLASTOR%C2%AE%20Core-0ea5e9?style=for-the-badge)](https://github.com/glastor-core/glastor-core) | `[![Powered by GLASTOR Core](https://img.shields.io/badge/Powered%20By-GLASTOR%C2%AE%20Core-0ea5e9?style=for-the-badge)](https://github.com/glastor-core/glastor-core)` |
| **Byte-Gauge**    | [![Binary Audit: Byte-Gauge](https://img.shields.io/badge/Binary%20Audit-Byte--Gauge-10b981?style=for-the-badge)](https://github.com/glastor-core/byte-gauge)         | `[![Binary Audit: Byte-Gauge](https://img.shields.io/badge/Binary%20Audit-Byte--Gauge-10b981?style=for-the-badge)](https://github.com/glastor-core/byte-gauge)`         |
| **Vortex CI**     | [![Predictive CI: Vortex](https://img.shields.io/badge/Predictive%20CI-Vortex%20AST-06b6d4?style=for-the-badge)](https://github.com/glastor-core/vortex)              | `[![Predictive CI: Vortex](https://img.shields.io/badge/Predictive%20CI-Vortex%20AST-06b6d4?style=for-the-badge)](https://github.com/glastor-core/vortex)`              |
| **Nemesis**       | [![DevSecOps: Nemesis](https://img.shields.io/badge/DevSecOps-Nemesis%20Audited-purple?style=for-the-badge)](https://github.com/glastor-core/nemesis)                 | `[![DevSecOps: Nemesis](https://img.shields.io/badge/DevSecOps-Nemesis%20Audited-purple?style=for-the-badge)](https://github.com/glastor-core/nemesis)`                 |

---

<div align="center">

[← Back to README](README.md) · [glastor.es](https://glastor.es) ·
[GitHub Discussions](https://github.com/orgs/glastor-core/discussions) ·
[founder@glastor.es](mailto:founder@glastor.es)

</div>
