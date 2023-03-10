import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, RawPostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: {
  allPostsData: (RawPostData & { id: string })[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} | Home`}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="my-2 font-bold text-2xl">👨‍💻 Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
