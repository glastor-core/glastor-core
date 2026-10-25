# Contributing to GLASTOR® Core

Thank you for your interest in contributing to **GLASTOR® Core**! We are building high-performance,
resilient systems and developer tools. This document provides clear guidelines to ensure smooth
collaboration.

---

## Code of Conduct

All contributors are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please report any
violations to `conduct@glastor.dev`.

---

## Development Workflow

We follow a structured Git branching model and enforce **Linear History** via Squash & Merge.

```
main (production-ready, releases)
  └── feature/your-feature-name
  └── fix/issue-description
  └── refactor/component-name
```

### 1. Fork & Clone

1. Fork the repository to your own account.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/glastor-core.git
   cd glastor-core
   ```
3. Set upstream remote:
   ```bash
   git remote add upstream https://github.com/glastor-core/glastor-core.git
   ```

### 2. Create a Feature Branch

Always create a branch named according to its purpose:

- `feature/<name>` for new features or capabilities
- `fix/<name>` for bug fixes
- `perf/<name>` for performance optimizations
- `docs/<name>` for documentation updates
- `refactor/<name>` for code restructurings

```bash
git checkout -b feature/dynamic-stream-engine
```

---

## Commit Guidelines (Conventional Commits)

We enforce the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/) specification.
This drives automated semantic versioning and changelog generation.

### Commit Structure

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Allowed Types

- **`feat`**: A new feature (corresponds to a MINOR version bump)
- **`fix`**: A bug fix (corresponds to a PATCH version bump)
- **`perf`**: A code change that improves performance
- **`refactor`**: A code change that neither fixes a bug nor adds a feature
- **`test`**: Adding missing tests or correcting existing tests
- **`docs`**: Documentation only changes
- **`style`**: Changes that do not affect the meaning of the code (formatting, missing semicolons,
  etc.)
- **`chore`**: Maintenance tasks, build system updates, or tooling configuration
- **`ci`**: Changes to CI/CD configuration files and scripts

### Breaking Changes

Breaking changes MUST include `BREAKING CHANGE:` in the footer or an exclamation mark after the
type/scope (e.g., `feat(api)!: migrate to stream protocol`).

### Signed Commits (Recommended)

We encourage signed commits for provenance verification:

```bash
git commit -S -m "feat(core): implement high-throughput event ring buffer"
```

---

## Quality Standards

Before submitting a Pull Request, ensure that:

1. **Tests pass**: Run the test suite locally.
2. **Linter & Formatting**: Ensure code adheres to `.editorconfig` and project linters.
3. **No secrets or credentials**: Never commit `.env`, keys, or test tokens.
4. **Documentation**: Update README or inline documentation if APIs are altered.

---

## Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin feature/dynamic-stream-engine
   ```
2. Open a Pull Request targeting `main`.
3. Fill out all sections of the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).
4. Link relevant issues using GitHub keywords (e.g., `Closes #42`).
5. Wait for CI checks (Lint, Test, DevSecOps audit) to pass.
6. Address any feedback provided during code review.

Thank you for making **GLASTOR® Core** better!
