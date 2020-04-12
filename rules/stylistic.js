module.exports = {
  rules: {
    'color-hex-length': 'long',
    'font-family-name-quotes': 'always-where-recommended',
    'function-name-case': 'lower',
    'function-whitespace-after': 'always',
    'length-zero-no-unit': true,
    'value-keyword-case': 'lower',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-type-case': 'lower',
    'selector-list-comma-space-before': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,
  },
};
