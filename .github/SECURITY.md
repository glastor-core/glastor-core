# 🛡️ GLASTOR® Core Security Policy

## Responsible Disclosure & Supply Chain Security

The security, integrity, and resilience of the **GLASTOR® Core** ecosystem is an absolute priority.
We appreciate the efforts of the security research community and independent developers in
discovering and responsibly reporting vulnerabilities.

---

## 🔒 Supported Versions

We actively maintain security patches for the following releases and branches:

| Version                    |      Status      | Maintenance Policy                                                              |
| :------------------------- | :--------------: | :------------------------------------------------------------------------------ |
| **Latest (`main`)**        |   ✅ Supported   | Immediate security patches, daily audit loops, and automated dependency updates |
| **Previous Major (v-1.x)** | 🛡️ Critical Only | Patches for high/critical vulnerabilities (CVSS ≥ 7.0)                          |
| **Legacy (< v-1.x)**       |  ❌ End of Life  | Unsupported. Upgrade required                                                   |

---

## 🚨 Reporting a Vulnerability

> ⚠️ **IMPORTANT:** **DO NOT** open public GitHub Issues or public pull requests for security
> vulnerabilities that could compromise production systems or reveal leaked credentials.

### Preferred Channel: GitHub Private Vulnerability Reporting (PVR)

Please report vulnerabilities using GitHub's native confidential reporting tool:

1. Navigate to the **Security** tab of the affected repository (e.g.
   [`glastor-core/glastor-core/security`](https://github.com/glastor-core/glastor-core/security)).
2. Click **Report a vulnerability**.
3. Fill out the advisory form with technical details, impact assessment, and a reproducible
   proof-of-concept (PoC).

### Alternative Direct Channel:

If Private Vulnerability Reporting is unavailable:

- **Security Contact:** [glastor.info@gmail.com](mailto:glastor.info@gmail.com)
- **Subject:** `[SECURITY-ALERT] GLASTOR Core - Vulnerability Report`

---

## ⏱️ Service Level Agreements (SLAs)

- **Initial Response & Acknowledgment:** Within **24 to 48 business hours**.
- **Triage & CVSS Assessment:** Within **5 business days**.
- **Coordinated Disclosure:** We adhere to a **90-day grace period** to allow patch deployment
  before public CVE disclosure.

---

<sub>© 2026 GLASTOR® Core. All rights reserved.</sub>
