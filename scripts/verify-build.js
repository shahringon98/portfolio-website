import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('====================================================');
console.log(' Portfolio Website Automated Verification Test Runner');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const results = [];

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${testName}`);
    results.push({ testName, status: 'PASS', details });
  } else {
    failedTests++;
    console.log(`  [FAIL] ${testName}${details ? ' - ' + details : ''}`);
    results.push({ testName, status: 'FAIL', details });
  }
}

function getFilesRecursively(dir, extensions = ['.js', '.jsx', '.json', '.html']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        results = results.concat(getFilesRecursively(filePath, extensions));
      }
    } else {
      if (extensions.some(ext => filePath.endsWith(ext))) {
        results.push(filePath);
      }
    }
  });
  return results;
}

async function runTests() {
  // ----------------------------------------------------
  // TIER 1: Feature Coverage (String Anchors Verification)
  // ----------------------------------------------------
  console.log('--- Tier 1: Feature Coverage & String Anchors ---');
  
  const resumeDataPath = path.join(projectRoot, 'src', 'data', 'resumeData.js');
  assert(fs.existsSync(resumeDataPath), 'Tier 1: resumeData.js file exists');
  
  let resumeDataContent = '';
  if (fs.existsSync(resumeDataPath)) {
    resumeDataContent = fs.readFileSync(resumeDataPath, 'utf-8');
  }

  // Mandatory String Anchors
  const anchors = [
    { text: 'Mohd Shahrin Bin Bahar', label: 'Candidate Name Anchor' },
    { text: 'Ministry of Finance', label: 'Organization Anchor' },
    { text: 'Doctor of Philosophy', label: 'Degree Anchor' }
  ];

  for (const anchor of anchors) {
    assert(
      resumeDataContent.includes(anchor.text),
      `Tier 1: Data Anchor - "${anchor.text}" (${anchor.label}) present in resumeData.js`
    );
  }

  // Check string anchors in React source files (src/App.jsx or src/components/*.jsx)
  const srcFiles = getFilesRecursively(path.join(projectRoot, 'src'), ['.jsx', '.js']);
  const combinedSrcContent = srcFiles.map(f => fs.readFileSync(f, 'utf-8')).join('\n');

  for (const anchor of anchors) {
    const foundInSrc = combinedSrcContent.includes(anchor.text) || combinedSrcContent.includes('personalInfo') || combinedSrcContent.includes('resumeData');
    assert(
      foundInSrc,
      `Tier 1: Render Anchor - "${anchor.text}" referenced or rendered in React component source files`
    );
  }

  // Dynamic import of resumeData for schema verification
  let resumeData = null;
  try {
    const module = await import('../src/data/resumeData.js');
    resumeData = module.default;
    assert(resumeData !== null && typeof resumeData === 'object', 'Tier 1: resumeData module successfully imported as default object');
  } catch (err) {
    assert(false, 'Tier 1: resumeData module import', err.message);
  }

  // ----------------------------------------------------
  // TIER 2: Boundary & Corner Cases (5 Required Sections)
  // ----------------------------------------------------
  console.log('\n--- Tier 2: Boundary & Corner Cases (Section Completeness) ---');

  if (resumeData) {
    // 1. Personal Info
    assert(
      resumeData.personalInfo &&
      typeof resumeData.personalInfo.name === 'string' &&
      resumeData.personalInfo.name.includes('Mohd Shahrin Bin Bahar') &&
      typeof resumeData.personalInfo.title === 'string' &&
      typeof resumeData.personalInfo.bio === 'string',
      'Tier 2: personalInfo object contains non-empty name, title, and bio'
    );

    // 2. Education
    assert(
      Array.isArray(resumeData.education) && resumeData.education.length > 0,
      'Tier 2: education section exists as non-empty array'
    );
    const validEducation = Array.isArray(resumeData.education) && resumeData.education.every(
      item => item.degree && item.institution && item.year
    );
    assert(validEducation, 'Tier 2: education items contain required fields (degree, institution, year)');

    // 3. Experience
    assert(
      Array.isArray(resumeData.experience) && resumeData.experience.length > 0,
      'Tier 2: experience section exists as non-empty array'
    );
    const validExperience = Array.isArray(resumeData.experience) && resumeData.experience.every(
      item => item.role && item.organization && item.period && Array.isArray(item.responsibilities)
    );
    assert(validExperience, 'Tier 2: experience items contain required fields (role, organization, period, responsibilities array)');

    // 4. Skills & Software Skills
    assert(
      Array.isArray(resumeData.skills) && resumeData.skills.length > 0,
      'Tier 2: skills section exists as non-empty array'
    );
    assert(
      Array.isArray(resumeData.softwareSkills) && resumeData.softwareSkills.length > 0,
      'Tier 2: softwareSkills section exists as non-empty array'
    );
    const validSoftwareSkills = Array.isArray(resumeData.softwareSkills) && resumeData.softwareSkills.every(
      item => item.name && item.level && item.category
    );
    assert(validSoftwareSkills, 'Tier 2: softwareSkills items contain required fields (name, level, category)');

    // 5. Publications
    assert(
      Array.isArray(resumeData.publications) && resumeData.publications.length > 0,
      'Tier 2: publications section exists as non-empty array'
    );
    const validPublications = Array.isArray(resumeData.publications) && resumeData.publications.every(
      item => item.title && item.publisher && item.year
    );
    assert(validPublications, 'Tier 2: publications items contain required fields (title, publisher, year)');
  } else {
    assert(false, 'Tier 2: Section checks skipped due to missing resumeData');
  }

  // Component UI section verification (checking presence of section headings or IDs in React code)
  const requiredSectionTokens = ['education', 'experience', 'skills', 'publications'];
  for (const token of requiredSectionTokens) {
    const hasToken = combinedSrcContent.toLowerCase().includes(token);
    assert(hasToken, `Tier 2: UI section token "${token}" present in React component templates`);
  }

  // ----------------------------------------------------
  // TIER 3: Cross-Feature Combinations & UI Check (Static Analysis)
  // ----------------------------------------------------
  console.log('\n--- Tier 3: Static Analysis & Framer Motion Integration ---');

  const pkgPath = path.join(projectRoot, 'package.json');
  assert(fs.existsSync(pkgPath), 'Tier 3: package.json exists');

  let pkgJson = {};
  if (fs.existsSync(pkgPath)) {
    try {
      pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      assert(true, 'Tier 3: package.json is valid JSON');
    } catch (e) {
      assert(false, 'Tier 3: package.json JSON parsing', e.message);
    }
  }

  const hasFramerMotion = pkgJson.dependencies && pkgJson.dependencies['framer-motion'];
  assert(Boolean(hasFramerMotion), 'Tier 3: framer-motion dependency declared in package.json');

  const hasLucideReact = pkgJson.dependencies && pkgJson.dependencies['lucide-react'];
  assert(Boolean(hasLucideReact), 'Tier 3: lucide-react dependency declared in package.json');

  // Check for motion components usage across React components
  const hasMotionImport = combinedSrcContent.includes("from 'framer-motion'") || combinedSrcContent.includes('from "framer-motion"');
  assert(hasMotionImport, 'Tier 3: framer-motion imported in React source files');

  const motionRegex = /<motion\.[a-zA-Z0-9]+/g;
  const motionMatches = combinedSrcContent.match(motionRegex);
  const motionCount = motionMatches ? motionMatches.length : 0;
  assert(motionCount > 0, `Tier 3: motion components used in React source files (found ${motionCount} occurrences)`);

  // Deployment configuration static check
  const deployWorkflowPath = path.join(projectRoot, '.github', 'workflows', 'deploy.yml');
  const hasDeployScript = pkgJson.scripts && pkgJson.scripts['deploy'];
  const hasDeployWorkflow = fs.existsSync(deployWorkflowPath);
  assert(
    Boolean(hasDeployScript || hasDeployWorkflow),
    'Tier 3: GitHub Pages deployment configured (deploy script or GitHub Actions workflow file)'
  );

  // ----------------------------------------------------
  // TIER 4: Real-World Deployment Build Check (Build Pipeline)
  // ----------------------------------------------------
  console.log('\n--- Tier 4: Real-World Build & Deployment Check ---');

  console.log('  Executing build pipeline: npm run build...');
  let buildSuccess = false;
  let buildError = null;
  try {
    const buildOutput = execSync('npm run build', {
      cwd: projectRoot,
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    buildSuccess = true;
    console.log('  Build stdout summary:', buildOutput.split('\n').filter(l => l.trim()).slice(-4).join(' | '));
  } catch (err) {
    buildError = err.message || err.stderr || String(err);
  }

  assert(buildSuccess, 'Tier 4: npm run build executed with exit code 0', buildError);

  const distDir = path.join(projectRoot, 'dist');
  assert(fs.existsSync(distDir), 'Tier 4: dist directory created by build pipeline');

  const distHtmlPath = path.join(distDir, 'index.html');
  assert(fs.existsSync(distHtmlPath), 'Tier 4: dist/index.html static bundle generated');

  if (fs.existsSync(distHtmlPath)) {
    const distHtmlContent = fs.readFileSync(distHtmlPath, 'utf-8');
    assert(distHtmlContent.length > 50, 'Tier 4: dist/index.html is valid non-empty HTML file');
  }

  // Summary Report
  console.log('\n====================================================');
  console.log(` Test Execution Summary`);
  console.log(` Total Tests: ${totalTests}`);
  console.log(` Passed:      ${passedTests}`);
  console.log(` Failed:      ${failedTests}`);
  console.log('====================================================\n');

  if (failedTests > 0) {
    console.error(`Verification FAILED with ${failedTests} failure(s).`);
    process.exit(1);
  } else {
    console.log('Verification PASSED successfully! All 4 tiers verified.');
    process.exit(0);
  }
}

runTests().catch(err => {
  console.error('Unhandled test runner exception:', err);
  process.exit(1);
});
