import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Parser',
    description: (
      <ul>
        <li>2x faster than swc</li>
        <li>Passes 99% of Test262</li>
      </ul>
    ),
  },
  {
    title: 'Linter',
    description: (
      <ul>
        <li>50 - 100x faster than ESLint</li>
        <li>Zero config</li>
      </ul>
    ),
  },
  {
    title: 'Resolver',
    description: (
      <ul>
        <li>x faster than enhanced-resolve</li>
        <li>Feature complete</li>
      </ul>
    ),
  },
  {
    title: 'Transformer',
    description: (
      <ul>
        <li>Babel Compatible</li>
        <li>Work in Progress</li>
      </ul>
    ),
  },
  {
    title: 'Minifier',
    description: (
      <ul>
        <li>Speed of ESBuild</li>
        <li>Optimization of Google Closure Compiler</li>
        <li>Prototype</li>
      </ul>
    ),
  },
  {
    title: 'Formatter',
    description: (
      <ul>
        <li>Prettier-like</li>
        <li>TBD</li>
      </ul>
    ),
  },
  {
    title: 'Ezno Type Checker',
    description: (
      <ul>
        <li>A novel type checker with TypeScript syntax</li>
      </ul>
    ),
  },
  {
    title: 'Rspack Bundler',
    description: (
      <ul>
        <li>Rust port of Webpack</li>
        <li>Partnership</li>
      </ul>
    ),
  },
  {
    title: 'Rolldown Bundler',
    description: (
      <ul>
        <li>Rust port of Rollup</li>
        <li>Partnership</li>
      </ul>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className="col col--4 padding-bottom--lg padding-left--xl">
      <div>
        <Heading as="h3" className="margin-bottom--sm">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container padding-horiz--lg">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
