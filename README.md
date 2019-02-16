# stylelint-config-tc

> Stylelint [shareable config](http://stylelint.io/user-guide/configuration/#extends)

[![license](https://img.shields.io/github/license/tclindner/stylelint-config-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/stylelint-config-tc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/stylelint-config-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/stylelint-config-tc)
[![Travis](https://img.shields.io/travis/tclindner/stylelint-config-tc.svg?maxAge=2592000?style=flat-square)](https://travis-ci.org/tclindner/stylelint-config-tc)
[![Dependency Status](https://david-dm.org/tclindner/stylelint-config-tc.svg?style=flat-square)](https://david-dm.org/tclindner/stylelint-config-tc)
[![devDependency Status](https://david-dm.org/tclindner/stylelint-config-tc/dev-status.svg?style=flat-square)](https://david-dm.org/tclindner/stylelint-config-tc#info=devDependencies)

## What is stylelint-config-tc?

Shared configuration for Stylelint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file!

# How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v6.0.0+
* [npm](http://npmjs.com) - v3.0.0+

### Command

```bash
npm install stylelint-config-tc stylelint stylelint-prettier prettier --save-dev
```

> stylelint, stylelint-prettier, and prettier are peer dependencies and must be installed.

## Usage

Add the following to your `.stylelintrc.json` file:

```json
{
	"extends": "stylelint-config-tc"
}
```

If you need to override a rule, your `.stylelintrc.json` file should look like the example below. All shared rules will be used, but `declaration-block-trailing-semicolon` will be turned off.

```json
{
	"extends": "stylelint-config-tc",
	"rules": {
		"declaration-block-trailing-semicolon": null
	}
}
```

## Contributing

Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## Change Log

Please see the [CHANGELOG.md](CHANGELOG.md) for more information.

## License

Copyright (c) 2018-2019 Thomas Lindner. Licensed under the MIT license.
