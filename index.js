const limitLanguageFeatures = require.resolve('./rules/limit-language-features');
const possibleErrors = require.resolve('./rules/possible-errors');
const prettier = require.resolve('./rules/prettier');
const stylistic = require.resolve('./rules/stylistic');

module.exports = {
  extends: [limitLanguageFeatures, possibleErrors, prettier, stylistic, 'stylelint-prettier/recommended'],
};
