# China Ski Points System Constitution

## Core Principles

### I. Feature Integrity
Every change must preserve the multi-discipline scoring logic (alpine, freestyle, snowboard) as described in the official rules. Do not simplify formulas or ranking rules without explicit product approval and updated documentation.

### II. Translation Accuracy
All UI copy lives in `src/locales`. When modifying features, update every locale and run the build to ensure no runtime merge errors. English is the fallback; avoid leaving placeholders or mixed-language strings.

### III. Data Consistency (Non-Negotiable)
Respect domain constraints defined in `docs/积分规则详解.md` and related rule files. Seed data, calculations, and exports must remain deterministic and reproducible across environments. Schema changes require migration scripts.

### IV. Deployment Parity
Builds destined for production must use `npm run build:github` to reproduce the `/ski` basePath and static export. Never edit the `out/` directory manually on servers—always redeploy via archive upload and Nginx reload.

### V. Observability & Security
Maintain audit, logging, and permission safeguards. Sanitise PII, guard JWT flows, and document any new secrets. Deployment artifacts and `.codex/` contents may contain tokens—treat them as sensitive and exclude from VCS where required.

## Additional Constraints
- Source layout: keep domain-specific logic in `src/utils` or dedicated calculators; UI components in `src/components` must stay presentation-focused.  
- Documentation: mirror functional updates in `docs/` (rules, testing matrices, design references).  
- Tooling: ESLint (`npm run lint`) and TypeScript (`npm run typecheck`) are mandatory gates before PR submission.

## Development Workflow
1. Work on numbered feature branches (`001-feature-name`).  
2. Generate or update spec artifacts under `specs/NNN-feature-name/` (spec.md, plan.md, tasks.md).  
3. Implement with TDD where feasible; capture manual test evidence aligned with `docs/测试规范.md`.  
4. Submit PRs linking issues, summarising changes, listing commands executed, and attaching UI screenshots if relevant.  
5. Production deploys require `out.tar.gz` regeneration plus documented verification steps.

## Governance
This constitution supersedes informal practices. Amendments demand consensus from the core maintainers, an updated version header, and migration notes when behaviour changes. Code reviews must verify compliance; deviations require written justification.

**Version**: 1.0.0 | **Ratified**: 2025-10-21 | **Last Amended**: 2025-10-21
