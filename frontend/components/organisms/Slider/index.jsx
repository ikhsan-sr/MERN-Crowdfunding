import styles from './Slider.module.css';

export default function Slider(props) {
  const banners = props.data;

  return (
    <div>
      <img src={banners[7].image_url} className={styles.img} />
    </div>
  );
}
