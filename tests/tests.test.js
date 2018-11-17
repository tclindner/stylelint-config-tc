const chai = require('chai');
const isPlainObj = require('is-plain-obj');
const stylelint = require('stylelint');
const stylelintConfig = require('../index.js');

const should = chai.should();

const code = `a {
  top: .5px;
}

`;

describe('stylelint config tests', () => {
  context('stylelint object', () => {
    it('should be an object', () => {
      isPlainObj(stylelintConfig).should.equal(true);
    });
  });

  context('rules', () => {
    it('should be an object', () => {
      isPlainObj(stylelintConfig.rules).should.equal(true);
    });
  });

  context('run stylelint and make sure it runs', () => {
    it('stylelint should run without failing', () => {
      stylelint.lint({
        code,
        config: stylelintConfig
      }).then(({errored, results}) => {
        const result = results[0];
        const warning = result.warnings[0];
        const expectedErrorLineNum = 2;
        const expectedErrorColumnNum = 8;

        errored.should.be.true;
        warning.line.should.equal(expectedErrorLineNum);
        warning.column.should.equal(expectedErrorColumnNum);
        warning.rule.should.equal('number-leading-zero');
        warning.severity.should.equal('error');
      });
    });
  });
});
