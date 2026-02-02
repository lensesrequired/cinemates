import { Auth } from '@/components/Auth';
import withAuth from '@/components/withAuth';

async function Home() {
  return <Auth />;
}

export default withAuth(Home, true);
