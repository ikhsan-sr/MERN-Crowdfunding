import HomeHeading from '../../atoms/HomeHeading';
import HomeSubHeading from '../../atoms/HomeSubHeading';
import CategoryItems from '../../molecules/CategoryItems';
import styles from './Categories.module.scss';

export default function Categories(props) {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <HomeHeading text="Kategori Program Kebaikan" />
      <HomeSubHeading text="Temukan beragam program kebaikan yang direkomendasikan untukmu" />
      <CategoryItems data={data} />
    </div>
  );
}
