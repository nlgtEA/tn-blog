import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} | Home`}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Thuan Ngo's personal blog 📝</p>
      </section>
    </Layout>
  );
}
