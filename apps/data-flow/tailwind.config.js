const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [plugin(function ({ addUtilities }) {
    addUtilities({
      '.btn': {
        'width': 'auto',
        'height': 'auto',
      }
    })
  })],
};
