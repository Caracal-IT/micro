# Micro Constitution

## Core Principles

### I. Code Quality Standards (NON-NEGOTIABLE)
Code MUST adhere to strict quality gates:
- All code MUST pass `go test` with 80%+ coverage across core packages
- ALL code MUST compile with `go build` without errors or warnings
- Functions MUST have clear, documented signatures using Go's built-in documentation tags
- All external dependencies MUST be pinned to specific versions in go.mod
- Code MUST follow Go formatting (`go fmt`) and lint rules (`go vet`, `staticcheck`)
- Complex logic MUST be broken into small, testable functions (<25 lines max)
- Error handling MUST be explicit; panic for unrecoverable errors only

### II. Testing Standards (NON-NEGOTIABLE)
Tests are a contract, not optional:
- EVERY function with behavior MUST have at least one test case
- Tests MUST be named using `Test<Name>` format with descriptive names
- Tests MUST be independent - no shared state between test cases
- Unit tests MUST use `testing.T` or `testing.TB`; Integration tests MUST use table-driven approach with `tests/` directory structure
- Mocks MUST be in separate `mock_` prefixed files; never mock production dependencies in production code
- Performance tests MUST be marked with `// perf:` comment and run via `-cpu` flag
- Test files MUST name: `_test.go` for units, `integration_test.go` for e2e flows

### III. User Experience Consistency (SHOULD)
User-facing experience MUST be consistent across the application:
- All CLI commands MUST follow naming conventions: `micro <verb>` where verbs are lowercase and action-oriented
- All output MUST be written to a single dedicated log file in the repo root
- All prompts MUST support stdin/stdout; interactive prompts MUST echo user input (no hidden input)
- Exit codes MUST be: 0 for success, non-zero for each error type (1=general, 2=usage, 3=internal)
- All interactive prompts MUST be cancellable with Ctrl+C; MUST prompt for confirmation on destructive actions
- Help text MUST be available via `--help` flag on all commands; MUST include description, usage, and options

### IV. Performance Requirements (SHOULD)
Performance MUST be considered in all design decisions:
- Large operations MUST be batched or streamed; avoid loading entire datasets into memory
- I/O operations MUST be deferred until absolutely necessary; synchronous I/O MUST not block user workflow
- External service calls MUST use connection pooling with configurable limits
- Any operation taking >1s MUST provide intermediate progress indicators
- Memory usage MUST be monitored; leaks MUST be caught via profiling in CI

### V. File Organization (NON-NEGOTIABLE)
Project structure MUST follow a consistent layout:
- Each service/package MUST have its own `cmd/`, `pkg/`, `internal/` directories
- Shared utilities MUST be in `pkg/` or `internal/pkg/`; never in command directories
- Test files MUST be in the same directory as the code they test; integration tests in `tests/` directory
- Configuration files MUST be at repo root; service-specific config in service directories
- Documentation MUST be included in every package via `README.md`; architecture docs in `docs/`

## Section 2: Go Language Standards

[GO_LANGUAGE_STANDARDS]

- Code MUST use Go 1.21+ features only (type parameters, generic functions)
- All external API calls MUST have error handling with retry logic for transient failures
- Structs MUST be capitalized (exported) only if part of public API
- Constants MUST be exported; variable names MUST be lowercase
- Package names MUST use short, descriptive lowercase names (no underscores)

## Section 3: Versioning & Compatibility

[VERSIONING_RULES]

- Major version changes MUST only be for breaking API changes
- Minor version changes MUST only add new functionality (backward compatible)
- Patch version changes MUST only be for bug fixes
- Breaking changes MUST be flagged with deprecation warnings and a sunset period (minimum 6 months)
- Dependency updates MUST follow semantic versioning ranges in go.mod

## Governance

### Amendments
- All principle changes MUST be preceded by a formal proposal in the PR description
- PRs modifying this constitution MUST include rationale citing user requirements or incident post-mortems
- At least two other contributors MUST review and approve principle changes
- Emergency changes MUST be documented and reviewed retroactively within 48 hours

### Version Control
[CONSTITUTION_VERSION]: Increment according to semantic versioning
- MAJOR: Removal or redefinition of non-negotiable principles
- MINOR: Addition or material expansion of guidance (new section, new principle)
- PATCH: Clarifications, wording, typo fixes, non-semantic refinements

### Compliance Review
- All PRs MUST have an automated check against code quality gates (coverage, linting, build)
- Code reviews MUST verify adherence to the principles listed above
- Quarterly audits MUST be conducted to ensure ongoing compliance

**Version**: 1.0.0 | **Ratified**: 2026-06-30 | **Last Amended**: 2026-06-30
