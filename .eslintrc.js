require('@offchainlabs/eslint-config-typescript/base');
require('@offchainlabs/eslint-config-typescript/react');

module.exports = {
  extends: [
    '@offchainlabs/eslint-config-typescript/base',
    '@offchainlabs/eslint-config-typescript/react',
  ],
  // Override here
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  settings: {
    'jsx-a11y': {
      components: {
        Button: 'button',
        Checkbox: 'input',
        Toggle: 'input',
      },
    },
  },
};
