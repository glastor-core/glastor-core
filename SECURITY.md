# Security Policy

At **GLASTOR® Core**, security and data integrity are fundamental principles. We take vulnerabilities seriously and appreciate the security community's efforts to disclose them responsibly.

---

## Supported Versions

Only the latest major and minor releases receive active security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0.0 | :x:                |

---

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

Instead, please report security issues through one of the following private channels:

1. **GitHub Private Vulnerability Reporting (Preferred)**:
   Navigate to the repository's **Security** tab and click on **Report a vulnerability**. This creates a secure, encrypted advisory visible only to maintainers.

2. **Direct Security Contact**:
   - Email: `security@glastor.dev` (or the security contact designated in GitHub org settings)
   - Subject: `[SECURITY ADVISORY] Potential vulnerability in glastor-core`

### What to Include in Your Report

To help us triage and reproduce the issue quickly, please provide:
- A clear description of the vulnerability.
- Step-by-step reproduction instructions or a minimal Proof of Concept (PoC).
- Affected versions, platforms, and dependencies.
- Potential impact or exploit scenario.

---

## Response Timeline & SLA

- **Initial Acknowledgment**: Within 24–48 hours of receipt.
- **Triage & Assessment**: Within 5 business days.
- **Remediation & Patch**: Targeted within 14–30 days depending on severity.
- **Public Disclosure**: Coordinated disclosure after patches are published and users have reasonable time to upgrade.

---

## Security Best Practices in our Pipelines

All repositories under the `glastor-core` organization adhere to:
- Continuous SAST (Static Application Security Testing).
- Automated Secret Scanning and Push Protection.
- Automated Dependency Auditing and CVE remediation via Dependabot.
- Mandatory PR review policies and signed commits.
