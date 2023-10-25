import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: 'Laravel',
    imgUrl: '/svgLogo/laravel.svg'
  },
  {
    title: 'Blade',
    imgUrl: '/svgLogo/blade.svg'
  },
  {
    title: 'Eloquent',
    imgUrl: '/svgLogo/laravel.svg'
  },
  {
    title: 'Livewere',
    imgUrl: '/svgLogo/livewire.svg'
  },
  {
    title: 'bootstrap',
    imgUrl: '/svgLogo/bootstrap.svg'
  }
];

function Feature({imgUrl, title, description}) {
  return (
    <div className={`${clsx('col col--4')} ${styles.boxFeature}`}>
      <div className="text--center padding-horiz--md">
        <img src={useBaseUrl(imgUrl)} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
