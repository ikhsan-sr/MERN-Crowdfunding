import styles from './CategoryIcon.module.scss';

export default function CategoryIcon(props) {
  const image = props.src;
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={image} alt="" />
    </div>
  );
}
