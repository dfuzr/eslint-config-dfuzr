const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react-hooks','react','simple-import-sort'],
  ignorePatterns: [ '**/build/**'],
  rules: {
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    // Ignore certain webpack alias because it can't be resolved
    'import/no-unresolved': [
      ERROR,
      {ignore: ['^@theme', '^@docusaurus', '^@generated']},
    ],
    'import/extensions': OFF,
    'no-unused-vars': ['error', { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_' }],
    'no-use-before-define':  ['error', { 'functions': false }],

    'react/jsx-closing-bracket-location': OFF, // Conflicts with Prettier.
    'react/jsx-filename-extension': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react/jsx-props-no-spreading': ['off'],
    'react/no-array-index-key': ['off'],
    'react/prop-types': OFF, // PropTypes aren't used much these days.
    'react/require-default-props': 'warn',

    'semi': ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/destructuring-assignment': 'warn',
    'consistent-return': 'warn',
  },
  overrides: [
    {
      'files': ['*.jsx', '*.js', '*.ts', '*.tsx'],
      'rules': {
        'simple-import-sort/imports': ['error', {
          'groups': [
            // Node.js builtins. You could also generate this regex if you use a `.js` config.
            [
            // Packages. `react` related packages come first.
            '^react', '^@?\\w',
            // Internal packages.
            '^(actions|api|auth|components|component_library|config|containers|HOCs|hooks|layouts|reducers|routes|store|templates|test|downloads|fonts|images|styles|utils|@commonTypes)(/.*|$)',
            // Side effect imports. (\u0000 = null character)
            '^\\u0000',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)', '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$',
            // Style imports last.
            '^.+\\.s?css$'
          ]]
        }]
      }
    }
  ]
};
