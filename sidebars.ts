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
  architecture: [
    'architecture/intro',
    'architecture/parser',
    'architecture/linter',
    'architecture/resolver',
    'architecture/transformer',
    'architecture/formatter',
    'architecture/minifier',
  ],
};

export default sidebars;
