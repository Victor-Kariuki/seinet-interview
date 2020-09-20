import Head from 'next/head'

const PageLayout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      {children}
    </main>
  </div>
);

export default PageLayout