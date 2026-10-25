# 🧭 GLASTOR® Core Public Architecture Roadmap

**Last Updated:** October 2026\
**Status:** Living Document\
**Tracking:** [GitHub Organization Projects](https://github.com/orgs/glastor-core/projects)

---

## 🎯 Strategic Vision

**GLASTOR® Core** provides resilient foundations for cloud, edge, and developer tooling. This
roadmap outlines current priorities across our three architectural pillars:

```text
[ Now: Q4 2026 ] ──► [ Next: Q1-Q2 2027 ] ──► [ Later: Future Vision ]
  Stabilization &      Distributed Sagas &     Federated Edge Mesh &
  DevSecOps Hardening  Multi-Engine CLI        Deterministic AI Runtimes
```

---

## 📍 Pillars & Milestones

### 1. ⚡ Edge Engine & Microservices

- **Now (Q4 2026):**
  - [x] Sub-millisecond deterministic request dispatcher.
  - [x] Bulkhead isolation pool and token-bucket rate limiter.
  - [ ] Adaptive backpressure streaming for memory-constrained edge environments.
- **Next (Q1 2027):**
  - [ ] Distributed Saga Checkpoint Store with pluggable durable persistence (SQLite, Redis,
        Memory).
  - [ ] Event-driven streaming connectors with zero-copy deserialization.
- **Later:**
  - [ ] Autonomous node failover and self-healing cluster mesh.

---

### 2. 🛡️ DevSecOps & Security Gateways (Nemesis)

- **Now (Q4 2026):**
  - [x] Pre-commit and push protection for secret leak mitigation.
  - [x] OpenSSF Scorecard automated audit loops.
  - [ ] Centralized reusable workflows for automated Trivy container/vulnerability scanning.
- **Next (Q1 2027):**
  - [ ] SLSA Level 3 automated provenance signing via Sigstore/Cosign.
  - [ ] Automated CycloneDX / SPDX Software Bill of Materials (SBOM) generation per release.
- **Later:**
  - [ ] Real-time runtime anomaly detection gateway with automated circuit breaker trip.

---

### 3. 📦 High-Performance Tooling & CLI

- **Now (Q4 2026):**
  - [x] Zero-dependency core library distribution.
  - [x] Full parity test matrix for Deno 2, Bun, and Node.js 22+.
  - [ ] Unified multi-runtime scaffolding CLI (`@glastor/cli`).
- **Next (Q1 2027):**
  - [ ] Standalone compiled single-binary executables for Linux (x64/arm64), macOS (Apple Silicon),
        and Windows.
  - [ ] DevContainer zero-setup onboarding for GitHub Codespaces.
- **Later:**
  - [ ] WebAssembly (Wasm) runtime sandbox for untrusted plugin execution.

---

## 💡 How to Propose New Features

We welcome community feedback! To propose an enhancement:

1. Check existing proposals in
   [GitHub Discussions (Ideas)](https://github.com/orgs/glastor-core/discussions/categories/ideas).
2. For major architectural modifications, submit an [RFC](rfcs/0000-template.md).

---

<sub>Roadmap priorities are subject to change based on security requirements and community
feedback.</sub>
