import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GitHubButton from 'react-github-btn';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <p>Open source, developed by the community, and completely free to use under the MIT license.</p>
        <p>Tags (star, tweet, follow)</p>
        <GitHubButton href="https://github.com/thekevinscott/upscalerjs" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star thekevinscott/upscalerjs on GitHub">Star</GitHubButton>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/demo">
              Live Demo
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
              Get Started
          </Link>
        </div>
        <code>npm install upscaler</code>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Upscale images using Javascript with Tensorflow.js"
    >
      <HomepageHeader />
      <section>
        <HomepageFeatures />
      </section>
      <section>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <iframe src="https://codesandbox.io/embed/github/thekevinscott/upscalerjs/tree/section/examples/basic?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
        title="basic-use-case-of-upscalerjs"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <Link href="/docs/usage">See more examples</Link>.
        </div>
      </section>
      <section>
      <div>Testimonials! Get addy osmani, jason mayes, david bisset</div>
      </section>
    </Layout>
  );
}
