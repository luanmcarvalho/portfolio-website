module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable the rules causing problems in your build
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-expressions': 'off'
  }
}