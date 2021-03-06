import { ReactNode } from 'react';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import Head from 'next/head';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>NextJS Basic {pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
