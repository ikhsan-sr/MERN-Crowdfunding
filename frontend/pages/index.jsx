import Container from '../components/templates/Container';
import Layout from '../components/templates/Layout';
import Homepage from '../components/templates/Homepage';

export default function Home(props) {
  console.log(props.dataHome);
  return (
    <Layout pageTitle="Home">
      <Container>
        <Homepage data={props} />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.serverAPI}/homepage`);
  const dataHome = await res.json();

  return {
    props: {
      dataHome,
    },
  };
}
