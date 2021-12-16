import { Grid } from '@mui/material';
import CategoryName from '../../atoms/CategoryName';
import CategoryIcon from '../../atoms/CategoryIcon';

export default function CategoryItems(props) {
  const categories = props.data;

  console.log(categories);

  return (
    <Grid container spacing={2}>
      {categories.map((item, idx) => (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={idx}>
          <CategoryIcon src={item.slug} />
          <CategoryName name={item.name} />
        </Grid>
      ))}
    </Grid>
  );
}
