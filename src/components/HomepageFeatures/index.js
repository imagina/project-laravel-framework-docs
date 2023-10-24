import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'GraphQL First',
    description: (
      <>
        React is good, GraphQl makes it better. Use GraphQL query at the component level. Data fetching never been easier.
      </>
    ),
    readMore: '/docs/development/knowledge-base/data-fetching'
  },
  {
    title: 'Zero Config',
    description: (
      <>
        Automatic compilation and bundling. Optimized for production from the start. Stay focused on the code.
      </>
    ),
    readMore: '/docs/development/getting-started/installation-guide'
  },
  {
    title: 'Fast Refresh',
    description: (
      <>
        Evershop Fast Refresh provides fast, reliable live-editing experience. Edit code and see changes in seconds.
      </>
    ),
    readMore: '/docs/development/knowledge-base/fast-refresh'
  },
  {
    title: 'File-system Middleware',
    description: (
      <>
        File-system based middleware. Flexible to add or remove middleware. Easy to extend and customize.
      </>
    ),
    readMore: '/docs/development/knowledge-base/middleware-system'
  },
  {
    title: 'API Routes',
    description: (
      <>
        Flexible to create API endpoints to provide backend functionality. Easy to extend and customize.
      </>
    ),
    readMore: '/docs/development/knowledge-base/api-routes'
  },
  {
    title: 'Built-in CSS Support',
    description: (
      <>
        Import CSS files from a JavaScript file. Built-in Sass and TailwindCSS support. Live reload with HMR.
      </>
    ),
    readMore: '/docs/development/theme/styling'
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
