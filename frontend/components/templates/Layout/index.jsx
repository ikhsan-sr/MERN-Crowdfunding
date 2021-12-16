import Head from 'next/head';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import styles from './Layout.module.css';

export default function Layout(props) {
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
