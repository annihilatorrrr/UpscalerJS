import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Demo" description="A Demo of Upscaler.js in action">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          fontSize: '20px',
        }}>
          <iframe height="100%" width="100%" src="https://upscaler.ai"></iframe>
      </div>
    </Layout>
  );
}
