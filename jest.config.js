const nextJest = require('next/jest')
 
/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
})

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
}
 
module.exports = createJestConfig(config)