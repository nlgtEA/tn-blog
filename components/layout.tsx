import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

import styles from './layout.module.css';

export const siteTitle = "Thuan's blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        ></link>
        <meta name="description" content="Thuan Ngo's personal blog" />
      </Head>
      <header className="flex flex-col md:flex-row gap-4 items-center mb-8">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={110}
              width={110}
              alt=""
            />
            <section>
              <h1 className="font-bold text-4xl mb-2">Thuan Ngo</h1>
              <p>Hello there 👋 Welcome to my blog</p>
            </section>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={80}
                width={80}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className="text-black">
                Thuan Ngo
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
