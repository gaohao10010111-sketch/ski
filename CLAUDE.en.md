# China Ski Points System

## Project Overview
China's comprehensive ski competition points management platform covering Alpine skiing, freestyle skiing, and snowboarding events, with full support for competition data management and points calculation.

### Supported Disciplines
1. National Snowboard Slopestyle and Big Air
2. Snowboard Parallel Events
3. Freestyle Ski Slopestyle and Big Air
4. Alpine Skiing

### Four Major Points Systems
1. Snowboard Slopestyle/Big Air: 240/360/120 point tiers with judge scores converted to rankings
2. Snowboard Parallel: Timed racing points with elimination brackets
3. Freestyle Slopestyle/Big Air: 240/360/120 point tiers with trick difficulty coefficients
4. Alpine Skiing: Version 4.0 time-based formula with A/B/C level multipliers (1.0/0.6/0.3)

For detailed scoring rules, see `docs/积分规则详解.md`.

## Core Features

### 1. Competition Data Management
- FIS standard XML import
- Data parsing and structured storage
- Multi-dimensional data queries

### 2. Four Points Calculators
- Real-time points calculation and updates
- Season points continuation at 50%
- Independent rankings per discipline
- Event classification (A level 1.0, B level 0.6, C level 0.3)

### 3. Registration Management
- Online registration and eligibility checks
- U-series age group handling (U12/U15/U18)
- Capacity limit of 32 athletes with waitlist management
- Fee calculation and payment integration

### 4. Results and Rules Management
- Results entry, statistics, and rankings
- Digital rules library
- Bilingual rule comparison (Chinese/English)

### 5. Report Generation
- Automated competition reports
- Points change analysis
- Export to multiple formats (PDF/Excel)

## Technical Architecture

### Frontend
- Web: Next.js + TypeScript
- Mini Program: Native WeChat mini program
- Mobile: Responsive PWA

### Backend
- API: Next.js API routes
- Database: PostgreSQL + Redis
- Storage: Cloud object storage (OSS/COS)

### Four Points Engines
```typescript
├── SnowboardSlopestyleBigAirCalculator  // Snowboard slopestyle/big air
├── SnowboardParallelCalculator          // Snowboard parallel events
├── FreestyleSlopestyleBigAirCalculator  // Freestyle slopestyle/big air
└── AlpineSkiCalculatorV4                // Alpine skiing v4.0
```

### Core Tables
```sql
four_sport_athletes      -- multi-discipline athletes
four_sport_competitions  -- multi-discipline competitions
four_sport_results       -- multi-discipline results
venue_standards          -- venue standards
u_series_management      -- U-series management
points_continuation      -- points continuation
```

## Development Stages

### Phase 1: Foundation
- Data models for all four disciplines
- Independent points engines
- Unified authentication and authorization

### Phase 2: Alpine Skiing System (v4.0)
- Points calculation engine
- Event level management (A/B/C)
- Dynamic penalty points
- Injury protection workflows

### Phase 3: Freestyle/Snowboard System
- 240/360/120 point tiers
- Score-to-ranking conversion
- Judge score entry
- Multi-heat event management

### Phase 4: U-Series Management
- Automatic grouping for U12/U15/U18
- Age verification (ID based)
- Capacity limits and waitlists
- Independent ranking tables

### Phase 5: Venue Standards
- Three-level venue standard library
- Compliance validation
- Venue certification reports

### Phase 6: Tour Management
- Six-stop tour scheduling
- Prize money distribution
- Points continuation rules

### Phase 7-8: Mobile and Optimization
- Mini program development
- PWA and offline capabilities
- Data analytics and visualization
- Performance tuning

## UI and UX References

### FIS Three-Layer Navigation
```
Layer 1 (Platform): Disciplines | Organizations | Announcements | Video | Membership
Layer 2 (Functions): Home | Schedule | Live Results | Athletes | More▼
Layer 3 (Content): Discipline pages (carousel/events/points/news/data)
```

For full design references, see `docs/FIS设计参考.md`.

## Git Repository

- GitHub: https://github.com/gaohao10010111-sketch/ski.git
- GitHub Pages: https://gaohao10010111-sketch.github.io/ski/
- Main branch: `main`

```bash
# Clone
git clone https://github.com/gaohao10010111-sketch/ski.git

# Push
git push origin main
```

## Deployment Options

### Recommended (in order)

#### 1. Vercel (simplest)
```bash
npx vercel --prod
```
- Zero configuration with automatic optimizations
- Free SSL and CDN

#### 2. Cloud Server (ECS)
```bash
git clone https://github.com/gaohao10010111-sketch/ski.git
cd ski
chmod +x deploy.sh
./deploy.sh
```
- Full deployment script included
- PM2 process management
- Nginx reverse proxy

#### 3. Docker
```bash
docker-compose up -d
```
- Consistent environments
- Easy to scale

### Deployment Files
```
├── Dockerfile              # Docker image
├── docker-compose.yml      # Orchestration
├── nginx.conf              # Nginx config
├── ecosystem.config.js     # PM2 config
├── deploy.sh               # One-click deployment
└── .env.example            # Environment template
```

## Testing Standards

### 35 Pages Across the App

#### Core Function Pages
- Home, About, Points Overview

#### Points Management (5 pages)
- Points Hub, Calculator, FIS Lookup, Rankings, Trends

#### Competition Management (3 pages)
- Competition Admin, Schedule, Statistics

#### Registration Management (4 pages)
- Registration, Fees, Admin Console, Online Signup

#### Rules Management (4 pages)
- Rules Hub, Competition Rules, FIS Rules, Points Rules

#### Results Management (3 pages)
- Results Release, Import, Query

#### User Management (3 pages)
- Login, Registration, Profile

See `docs/测试规范.md` for the full checklist.

### Testing Checklist
- ✅ Core flows (load, navigation, footer)
- 🎨 Interface (layout, typography, responsive behavior)
- 🔗 Functionality (forms, search, data)
- 🚫 Error handling (404s, JavaScript errors, APIs)
- ♿ Accessibility (headings, labels, contrast)
- ⚡ Performance (load time, compression, caching)

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint

# Tests
npm test
```

## Documentation

### Core References
- `docs/积分规则详解.md` – Detailed scoring rules
- `docs/FIS设计参考.md` – FIS UI/UX study
- `docs/测试规范.md` – Test plans and criteria
- `docs/API文档.md` – API documentation

### Supporting Materials
- `中国高山滑雪赛事积分规则v4.docx` – Official alpine rules v4.0
- `2025-2026赛季全国BA、SS青少年U系列比赛方案.docx` – U-series plan
- `HPSSBA场地标准.xlsx` – Venue technical standards
- `fis_points_rules_02-09-2024.pdf` – FIS points rules
- `国际雪联竞赛规则2021年7月版（中英）.docx` – Bilingual FIS rulebook

## Security Considerations
- Role-based access control
- Encrypted data transmission
- Masking sensitive information
- Audit logging
- Token-based access protection

---

This document provides the core overview. See the `docs/` directory for in-depth technical specs, scoring formulas, and UI design details.

## GitHub Push Example

Using a personal access token:
```bash
git push https://<USERNAME>:<PERSONAL_ACCESS_TOKEN>@github.com/gaohao10010111-sketch/ski.git main
```
Replace `<USERNAME>` and `<PERSONAL_ACCESS_TOKEN>` with valid credentials.
