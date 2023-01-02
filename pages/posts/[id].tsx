import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Date from '../../components/date';
import Layout, { siteTitle } from '../../components/layout';
import { getAllPostPaths, getPostData, Post as PostType} from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }: { postData: PostType }) {
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
