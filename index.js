module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
  ],
  rules: {
    'arrow-parens': [
      2,
      'always'
    ],
    'class-methods-use-this': 1,
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true
      }
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'func-names': 0,
    'import/extensions': 0,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': [
      2,
      {
        code: 120,
        ignoreComments: true
      }
    ],
    'no-await-in-loop': 1,
    'no-console': [
      1,
      {
        allow: [
          'warn',
          'error',
          'trace'
        ]
      }
    ],
    'no-continue': 0,
    'no-duplicate-imports': 1,
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-param-reassign': 1,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-underscore-dangle': 0,
    'prefer-const': 0,
    'prefer-destructuring': 1,
    'prefer-template': 1,
    radix: 0,
    'require-yield': 1,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': [
      0,
      'always'
    ],
    strict: 'error'
  }
};

// let rules = {};
// for (let key of Object.keys(module.exports.rules).sort()) {
//   rules[key] = module.exports.rules[key];
// }

// console.log(JSON.stringify(rules, null, 2));
