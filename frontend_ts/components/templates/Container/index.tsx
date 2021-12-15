import { ReactNode } from 'react';
import styles from './Container.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}
