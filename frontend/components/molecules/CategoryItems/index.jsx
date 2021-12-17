import { Grid } from '@mui/material';
import CategoryName from '../../atoms/CategoryName';
import CategoryIcon from '../../atoms/CategoryIcon';
import styles from './CategoryItems.module.scss';

export default function CategoryItems(props) {
  const categories = props.data;

  return (
    <Grid container spacing={2} className={styles.wrapper}>
      {categories.map((item, idx) => (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={idx}>
          <CategoryIcon src={`${process.env.serverAPI}/${item.image_url}`} />
          <CategoryName name={item.name} />
        </Grid>
      ))}
    </Grid>
  );
}
