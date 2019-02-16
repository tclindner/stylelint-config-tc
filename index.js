const limitLanguageFeatures = require.resolve('./rules/limitLanguageFeatures');
const possibleErrors = require.resolve('./rules/possibleErrors');
const prettier = require.resolve('./rules/prettier');
const stylistic = require.resolve('./rules/stylistic');

module.exports = {
  extends: [limitLanguageFeatures, possibleErrors, prettier, stylistic, 'stylelint-prettier/recommended']
};
