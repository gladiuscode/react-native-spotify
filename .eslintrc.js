// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'plugin:@tanstack/query/recommended'],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['/dist/*'],
};
