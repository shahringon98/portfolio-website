# TEST_READY — Portfolio Website Test Suite (Milestone T1)

## Overview
Milestone T1 test runner infrastructure has been fully implemented in `scripts/verify-build.js` and wired to `npm test`.

## Test Runner Architecture
The test suite is structured into a 4-Tier opaque-box test runner:

### Tier 1: Feature Coverage & Mandatory String Anchors
- **Purpose**: Asserts that essential resume text anchors are present in both raw data (`src/data/resumeData.js`) and React source component templates.
- **Anchors Verified**:
  1. `"Mohd Shahrin Bin Bahar"` (Candidate Name)
  2. `"Ministry of Finance"` (Organization Anchor)
  3. `"Doctor of Philosophy"` (Degree Anchor)
- **Schema Import**: Performs dynamic ESM import (`import('../src/data/resumeData.js')`) to verify module export integrity.

### Tier 2: Boundary & Corner Cases (Section Completeness & Validity)
- **Purpose**: Verifies that all 5 mandatory portfolio sections are fully populated with valid structured data and matching UI section tokens.
- **Sections Verified**:
  1. `personalInfo`: Name, Title, Bio.
  2. `education`: Degree, Institution, Year, Details.
  3. `experience`: Role, Organization, Period, Responsibilities list.
  4. `skills` & `softwareSkills`: Skill categories, software skill names, proficiency levels.
  5. `publications`: Title, Publisher, Year.
- **UI Tokens**: Scans component templates for section heading anchors (`education`, `experience`, `skills`, `publications`).

### Tier 3: Cross-Feature Combinations & UI Check (Static Analysis)
- **Purpose**: Ensures key animations and deployment capabilities are properly declared and integrated.
- **Checks**:
  - `package.json` parsing and dependency verification (`framer-motion`, `lucide-react`).
  - React source code static analysis for `import { motion } from 'framer-motion'` and usage of `<motion.` elements (`<motion.section>`, `<motion.div>`, etc.).
  - Deployment configuration verification (`gh-pages` script or `.github/workflows/deploy.yml`).

### Tier 4: Real-World Deployment Build Check (Build Pipeline)
- **Purpose**: Executes real-world build command in a child process to guarantee deployment bundle creation.
- **Checks**:
  - Spawns `npm run build` synchronously and asserts exit code `0`.
  - Asserts existence of `dist/` build directory.
  - Asserts existence and non-empty content of `dist/index.html`.

---

## How to Run Tests
Run the test suite using standard npm command:
```bash
npm test
```
Or execute directly with Node:
```bash
node scripts/verify-build.js
```

---

## Integrity & Quality Assurance
- **No Facades**: Real file system parsing, static analysis, dynamic ESM imports, and child process build executions.
- **Deterministic Outcome**: Exit code `0` on 100% pass; exit code `1` on any failure.
- **Self-Contained**: Isolated execution with no external API or browser runner dependencies required.
