const isPlainObj = require('is-plain-obj');
const stylelint = require('stylelint');
const stylelintConfig = require('../index.js');

const code = `a {
  top: .5px;
}
`;

describe('stylelint config tests', () => {
  describe('stylelint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(stylelintConfig)).toBeTruthy();
    });
  });

  describe('extends', () => {
    test('should be an object', () => {
      expect(Array.isArray(stylelintConfig.extends)).toBeTruthy();
    });
  });

  describe('run stylelint and make sure it runs', () => {
    test('stylelint should run without failing', done => {
      stylelint
        .lint({
          code,
          configFile: '.stylelintrc.json'
        })
        .then(({errored, results}) => {
          const result = results[0];
          const warning = result.warnings[0];
          const expectedErrorLineNum = 2;
          const expectedErrorColumnNum = 8;

          expect(errored).toBeTruthy();
          expect(warning.line).toStrictEqual(expectedErrorLineNum);
          expect(warning.column).toStrictEqual(expectedErrorColumnNum);
          expect(warning.rule).toStrictEqual('prettier/prettier');
          expect(warning.severity).toStrictEqual('error');

          done();
        });
    });
  });
});
