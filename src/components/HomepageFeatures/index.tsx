import clsx from 'clsx';
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
        <li>Passes all of test262</li>
      </ul>
    ),
  },
  {
    title: 'Linter',
    description: (
      <ul>
        <li>50 - 100x faster than ESLint</li>
        <li>No configuration is required</li>
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
    title: 'Transpiler',
    description: (
      <ul>
        <li>Babel compatible</li>
        <li>Work in Progress</li>
      </ul>
    ),
  },
  {
    title: 'Minifier',
    description: (
      <ul>
        <li></li>
        <li>Prototype</li>
      </ul>
    ),
  },
  {
    title: 'Formatter',
    description: (
      <ul>
        <li>TBD</li>
      </ul>
    ),
  },
  {
    title: 'Ezno Type Checker',
    description: (
      <ul>
        <li>A novel type checker using the TypeScript syntax</li>
      </ul>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
