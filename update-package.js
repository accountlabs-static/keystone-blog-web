const fs = require('fs');
const path = require('path');

// Read the GITHUB_TOKEN from Vercel environments
const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  console.error('GITHUB_TOKEN is not provided in Vercel environments.');
  process.exit(1);
}

// Read the package.json
const packageJsonPath = path.resolve(__dirname, '.', 'package.json');
const packageJson = require(packageJsonPath);

// Update the dependencies with the GITHUB_TOKEN
packageJson.dependencies['header-footer'] = `git+https://keystonehq:${githubToken}@github.com/KeystoneHQ/header-footer-components.git`;

// Write the updated package.json back to file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Updated package.json with GITHUB_TOKEN from Vercel environments.');
