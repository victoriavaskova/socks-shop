import globals from 'globals';
import pluginJs from '@eslint/js';
import elbrusConfig from '@elbrus/eslint-config';
import elbrusPlugin from '@elbrus/eslint-plugin';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
  ...elbrusConfig,
  {
    plugins: {
      '@elbrus': elbrusPlugin,
    },
    rules: {
      '@elbrus/prefer-for-of': 'error',
    },
  },
];
