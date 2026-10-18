# GLASTOR® Core

[![Deno](https://img.shields.io/badge/Deno-%5E2.0.0-black?logo=deno&logoColor=white)](https://deno.land/)
[![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker&logoColor=white)](https://hub.docker.com/)
[![Lefthook](https://img.shields.io/badge/lefthook-enabled-brightgreen?logo=lefthook&logoColor=white)](https://github.com/evilmartians/lefthook)

The resilient, high-throughput core engine powering next-generation distributed systems.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Dependencies](#dependencies)
- [CI/CD](#cicd)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation
```bash
deno install -A -n glastor-core ./src/main.ts
```

## Usage
```bash
glastor-core --template modern --output README.md
```

## Example
```ts
```ts
const status = initGlastorCore({ appId: "glastor-edge", debug: true });
console.log(`Engine healthy: ${status.healthy}`);
```
```

## API Reference
### src/mod.ts
#### GlastorConfig
GLASTOR Core Engine configuration options.
- Type: interface

#### initGlastorCore
Initializes and starts the GLASTOR Core engine.
- Type: function
- Signature: `initGlastorCore(config: GlastorConfig): KernelStatus`
- Params:
  - config - Configuration options for the engine.
- Returns - Initialized kernel status descriptor.

```ts
```ts
const status = initGlastorCore({ appId: "glastor-edge", debug: true });
console.log(`Engine healthy: ${status.healthy}`);
```
```

#### KernelStatus
Kernel status representation.
- Type: interface

## Dependencies
### Config files
- deno.json/deno.jsonc

### Project files
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- LICENSE
- SECURITY.md

### Standard Library
- (none)

### Third-party
- @glastor/core
- https://jsr.io/@glastor-dev/readmegen/2.2.0/src/project/analyze.ts
- https://jsr.io/@glastor-dev/readmegen/2.2.0/src/templates/render.ts
- jsr:@glastor-dev/readmegen

## CI/CD
- .github\workflows\ci.yml
- .github\workflows\codeql.yml
- .github\workflows\greetings.yml
- .github\workflows\labeler.yml
- .github\workflows\provenance.yml
- .github\workflows\release.yml
- .github\workflows\scorecard.yml
- .github\workflows\security.yml
- .github\workflows\stale.yml

## Testing
```bash
deno task test
```

## Contributing
CONTRIBUTING.md

## License
Apache-2.0
