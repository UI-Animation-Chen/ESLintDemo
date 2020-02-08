# eslint-plugin-czf

eslint plugin czf

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-czf`:

```
$ npm install eslint-plugin-czf --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-czf` globally.

## Usage

Add `czf` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "czf"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "czf/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





