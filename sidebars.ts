import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  usage: ['usage/intro', 'usage/linter', 'usage/resolver'],
  contribute: [
    'contribute/intro',
    'contribute/parser',
    'contribute/linter',
    'contribute/resolver',
    'contribute/transformer',
    'contribute/formatter',
    'contribute/minifier',
  ],
  learn: [
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'learn/architecture/intro',
        'learn/architecture/parser',
        'learn/architecture/linter',
        'learn/architecture/resolver',
        'learn/architecture/transformer',
        'learn/architecture/formatter',
        'learn/architecture/minifier',
      ],
    },
  ],
};

export default sidebars;
