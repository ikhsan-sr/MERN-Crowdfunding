import Slider from '../../organisms/Slider';
import Categories from '../../organisms/Categories';

export default function Homepage(props) {
  const data = props.data.dataHome;

  return (
    <>
      <Slider data={data.banners} />
      <Categories data={data.categories} />
    </>
  );
}
