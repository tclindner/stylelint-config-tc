const isPlainObj = require('is-plain-obj');
const stylelint = require('stylelint');
const stylelintConfig = require('../index');

const code = `p {
  margin-bottom: 10px;
}

a {
  top: .5px;
}
`;

describe('stylelint config tests', () => {
  describe('stylelint object', () => {
    test('should be an object', () => {
      expect(isPlainObj(stylelintConfig)).toBe(true);
    });
  });

  describe('extends', () => {
    test('should be an object', () => {
      expect(Array.isArray(stylelintConfig.extends)).toBe(true);
    });
  });

  describe('run stylelint and make sure it runs', () => {
    test('stylelint should run without failing', async () => {
      const {errored, results} = await stylelint.lint({
        code,
        configFile: '.stylelintrc.json',
      });
console.log(errored);
console.log(results[0]);
      const result = results[0];
      const warning = result.warnings[0];
      const expectedErrorLineNum = 6;
      const expectedErrorColumnNum = 8;

      expect(errored).toBe(true);
      expect(warning.line).toStrictEqual(expectedErrorLineNum);
      expect(warning.column).toStrictEqual(expectedErrorColumnNum);
      expect(warning.rule).toStrictEqual('prettier/prettier');
      expect(warning.severity).toStrictEqual('error');
    });
  });
});
