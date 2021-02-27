import { Header } from '../components/Header';
import { withUrqlClient } from 'next-urql';
import { urqlClient } from '../utils/urqlClient';
import { Container, Flex, Box } from '@chakra-ui/layout';
import {Input} from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Header/>
      <Container m={2}>
        <Box>
          
        </Box>
      </Container>
    </>
  )
}

export default withUrqlClient(urqlClient)(Home);
