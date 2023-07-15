const limitLanguageFeatures = require.resolve('./rules/limit-language-features');
const prettier = require.resolve('./rules/prettier');

module.exports = {
  extends: ['stylelint-config-standard', limitLanguageFeatures, 'stylelint-prettier/recommended', prettier],
  plugins: ['stylelint-prettier']
};
