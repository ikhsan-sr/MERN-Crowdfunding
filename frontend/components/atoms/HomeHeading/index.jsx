import styles from './HomeHeading.module.scss';

export default function index(props) {
  return <h2 className={styles.text}>{props.text}</h2>;
}
