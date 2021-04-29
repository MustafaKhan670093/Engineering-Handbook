import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Who Am I',
    Svg: require('../../static/img/undraw_developer_activity_bv83.svg').default,
    description: (
      <>
        My name is Mustafa Khan and I am an Engineering Science student at the University of Toronto. I am constantly learning and creating. 

      </>
    ),
  },
  {
    title: 'My Process',
    Svg: require('../../static/img/undraw_hologram_fjwp.svg').default,
    description: (
      <>
        This handbook outlines my engineering design process. 
        Included are notes and lessons from using various tools, models and frameworks of design.
      </>
    ),
  },
  {
    title: 'Growth',
    Svg: require('../../static/img/undraw_drone_surveillance_kjjg.svg').default,
    description: (
      <>
        Examples of my work are used to illuminate my process.
        Building on what has or hasn't worked out of this is my primary vehicle for self growth.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
