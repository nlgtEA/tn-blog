import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Layout, { siteTitle } from '../../components/layout';
import { getAllPostPaths, getPostData, Post } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Post({ postData }: { postData: Post }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} | ${postData.title}`}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params?.id as string;

  const postData = await getPostData(postId);

  return {
    props: {
      postData,
    },
  };
};
