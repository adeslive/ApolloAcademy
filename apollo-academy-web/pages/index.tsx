import { Header } from '../components/Header';
import { withUrqlClient } from 'next-urql';
import { urqlClient } from '../utils/urqlClient';

const Home = () => {
  return (
    <>
      <Header/>
      <h1>Hello world</h1>
    </>
  )
}

export default withUrqlClient(urqlClient)(Home);
