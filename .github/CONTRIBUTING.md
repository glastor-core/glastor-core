# 🚀 GLASTOR® Core Contributing Guidelines

Thank you for contributing to **GLASTOR® Core**. We value technical excellence, architectural rigor,
sub-millisecond efficiency, and clean engineering practices.

---

## 🧭 Key Governance Links

Before contributing, please familiarize yourself with:

- [Governance Model](GOVERNANCE.md) — Roles, merge authority, and RFC process.
- [Public Roadmap](ROADMAP.md) — Current priorities, milestones, and strategic direction.
- [Code of Conduct](CODE_OF_CONDUCT.md) — Community standards and expectations.
- [Security Policy](SECURITY.md) — Reporting vulnerabilities responsibly.

---

## 🛠️ Pull Request Workflow

1. **Semantic Branching:**
   ```bash
   git checkout -b feat/your-feature-name
   # or fix/issue-description
   ```

2. **Local Hygiene & Verification:** Ensure formatting, linter, and tests pass with zero warnings
   before opening a PR:
   ```bash
   # If using Deno
   deno fmt --check && deno lint && deno test -A

   # If using Bun / Node
   npm run lint && npm test
   ```

3. **Conventional Commits:** Follow our [Commit Convention](COMMIT_CONVENTION.md):
   ```bash
   git commit -m "feat(core): implement deterministic schema validation"
   ```

4. **Open Pull Request:** Submit your branch against `main` using our
   [PR Template](PULL_REQUEST_TEMPLATE.md).

---

## 📐 Engineering Principles

- **Clean Code & SOLID:** Modular, deterministic functions, and strict typing without unjustified
  `any`.
- **Atomic Pull Requests:** One PR solves one discrete responsibility with corresponding
  unit/integration tests.
- **Documentation Parity:** Every API modification must include corresponding documentation updates.
- **Supply Chain Integrity:** Zero unjustified external dependencies. Keep footprint minimal.

---

<sub>© 2026 GLASTOR® Core. All rights reserved. Licensed under Apache 2.0.</sub>
