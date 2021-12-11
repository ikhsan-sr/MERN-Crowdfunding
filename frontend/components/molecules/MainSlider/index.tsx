import Image from 'next/image';
import styles from './MainBanner.module.css';

export default function MainBanner() {
  return (
    <div className={styles.container}>
      {/* <Image src="/kidscrop.jpg" layout="responsive" width={400} height={175} /> */}
      <div className={styles.imageWrapper}>
        <img
          src="/kidscropsmall.jpg"
          alt="main-banner"
          className={styles.banner}
        />
      </div>
      {/* TODO: Create floating main info */}
      <div className={styles.mainInfo}></div>
    </div>
  );
}
