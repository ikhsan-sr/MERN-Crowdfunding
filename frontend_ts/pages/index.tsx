import Layout from '../components/templates/Layout';
import Container from '../components/templates/Container';
import Slider from '../components/organisms/Slider';
import SelectedCampaigns from '../components/organisms/SelectedCampaigns';
import NewsCampaigns from '../components/organisms/NewsCampaigns';
import Banner from '../components/organisms/Banner';
import CampaignsByCategory from '../components/organisms/CampaignsByCategory';

type DataHome = {
  dataHome: {
    categories: any[];
    banners: any[];
  };
};

declare namespace JSX {
  interface IntrinsicElements {
    Slider: { data: object };
  }
}

export default function Home(props: DataHome) {
  const { dataHome } = props;

  console.log(dataHome);

  return (
    <Layout pageTitle="Home">
      <Container>
        <Slider data={dataHome.banners} />
        <SelectedCampaigns />
        <NewsCampaigns />
        <Banner />
        <CampaignsByCategory />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.serverAPI}homepage`);
  const dataHome = await res.json();

  return {
    props: {
      dataHome,
    },
  };
}
