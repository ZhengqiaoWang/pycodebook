import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '直观易读',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        你可以对照着项目源码学习和理解Python。
      </>
    ),
  },
  {
    title: '聚焦于项目',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        以项目为起点，通过几个项目实例学习相关知识点。
      </>
    ),
  },
  {
    title: '涵盖全面',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        项目中的关键知识点都可以指向到知识点讲解篇，在那里你可以更深入地学习相关概念。
      </>
    ),
  },
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
