import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="Detail User">
      <p>Detail User Page {id}</p>
    </Layout>
  );
}
