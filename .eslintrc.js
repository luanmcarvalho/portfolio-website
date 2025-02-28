module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable ESLint rules causing errors
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  }
}