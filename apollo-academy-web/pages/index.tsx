import { Header } from '../components/Header';
import { Footer } from '../components/footer/Footer';
import { withUrqlClient } from 'next-urql';
import { urqlClient } from '../utils/urqlClient';
import { Container, Box, Stack, Center } from '@chakra-ui/layout';
import Layout from '../components/Layout';
import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { ImageLink } from '../components/ImageLink';
import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      <Header />
      <Layout size="big">
        <Container centerContent>
          <Stack spacing={3} marginTop={["1rem", "3rem"]}>
            <Center><Text fontSize="6xl" color={["white", "red"]} textAlign="center">Apollo Academy</Text></Center>
            <Center>
              <Text fontSize="1xl" color={["white", "white"]} textAlign="center" display={["none", "block"]}>Si quieres aprender los diferentes idiomas que existen en el mundo,
              ven y visitanos para ser parte del mejor aprendizaje, contamos con los mejores profesionales en lenguas
              extranjeras.
            </Text>
            </Center>
          </Stack>
          <Box position="absolute" zIndex={-1} top={0} left={0} margin={0} width="100%" height={["400px", "520px"]} backgroundColor="black"
            bgGradient="radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 10px),
          radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 5px), 
          radial-gradient(white, rgba(255,255,255,.1) 2px, 
          transparent 10px), radial-gradient(rgba(255,255,255,.4), 
          rgba(255,255,255,.1) 2px, transparent 5px)"
            backgroundSize="550px 550px, 350px 350px, 250px 250px, 150px 150px"
            backgroundPosition="0 0, 40px 60px, 130px 280px, 70px 100px"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 576 324">
              <path id="Unnamed"
                fill="white" stroke="white" strokeWidth={2}
                d="M 576.00,243.00
              C 576.00,243.00 575.75,323.75 575.75,323.75
                575.75,323.75 0.00,323.75 0.00,323.75
                0.00,323.75 0.00,243.00 0.00,243.00
                0.00,243.00 289.00,351.00 576.00,243.00" />
            </svg>
          </Box>
        </Container>
        <Stack direction={["column", "row"]} spacing={["1rem", "5rem"]} marginTop={["5rem", "12rem"]} >
          <Box boxSize={["sm", "auto"]}>
            <Image src="ilustracion2.jpg" width="750px" height="404px"/>
          </Box>
          <Stack spacing="1rem">
            <Flex>
              <Box rounded="16px 16px" width="32px" height="32px" position="absolute" ml="-9px" mt="2px" zIndex="-1" backgroundColor="#1a1a8c" />
              <Text fontSize="xl" color="white">1</Text>
              <Box ml="3rem">
                <Text fontSize="2xl" color="black">
                  Somos una academia de idiomas 100% hondureña
                </Text>
              </Box>
            </Flex>

            <Flex>

              <Box rounded="16px 16px" width="32px" height="32px" position="absolute" ml="-9px" mt="2px" zIndex="-1" backgroundColor="#1a1a8c" />
              <Text fontSize="xl" color="white">2</Text>

              <Box ml="3rem">
                <Text fontSize="2xl" color="black">
                  Te ofrecemos cursos de Inglés, Francés, Alemán, Italiano, Portugués.
                  Nuestros docentes son egresados de la carrera de Lenguas Extranjeras de la Universidad Nacional
                  Autónoma de Honduras.
                </Text>
              </Box>
            </Flex>

            <Flex>

              <Box rounded="16px 16px" width="32px" height="32px" position="absolute" ml="-9px" mt="2px" zIndex="-1" backgroundColor="#1a1a8c" />
              <Text fontSize="xl" color="white">3</Text>
              <Box ml="3rem">
                <Text fontSize="2xl" color="black">
                  Aprende desde casa con nuestra modalidad virtual.
                </Text>
              </Box>
            </Flex>
             <Flex>
              <Box rounded="16px 16px" width="32px" height="32px" position="absolute" ml="-9px" mt="2px" zIndex="-1" backgroundColor="#1a1a8c" />
              <Text fontSize="xl" color="white">4</Text>
              <Box ml="3rem">
                <Text fontSize="2xl" color="black">
                Contamos con cursos de diferentes idiomas a través de nuestra página web. 
                Te ofrecemos un mejor futuro, no te quedes sin la oportunidad de aprender ese idioma que siempre has querido 🌎 
                </Text>
              </Box>
            </Flex>
          </Stack>
        </Stack>

        <Card>
            <Flex alignItems="center">
              <Text fontSize="md" ml="32rem">
        
              MISION
              </Text>
            </Flex>
          </Card>

        <Card>
            <Flex alignItems="center">
              <Text fontSize="md" ml="2rem">
        
            Somos una academia de idiomas 100% hondureña, contribuimos y trabajamos por el desarrollo del país, 
            a través de la enseñanza de diferentes idiomas,contamos con los mejores profesionales de lenguas extranjeras en el país 
            egresados de la Universidad Nacional Autónoma de Honduras, para que amigos, compañeros, estudiantes, familias, personas en general, 
            puedan aprender nuevos idiomas, fomentando la paz, armonía y la unidad de toda la población.

              </Text>
            </Flex>
          </Card>

          <Card>
            <Flex alignItems="center">
              <Text fontSize="md" ml="32rem">
        
              VISION
              </Text>
            </Flex>
          </Card>

        <Card>
            <Flex alignItems="center">
              <Text fontSize="md" ml="2rem">
        
              Ser una empresa líder en el aprendizaje de nuevos idiomas a nivel nacional, por medio de la tecnología unir a todas las personas
                y formar una sociedad desarrollada.

              </Text>
            </Flex>
          </Card>

        <SimpleGrid columns={2} spacing="2rem" mt="4rem">
          <ImageLink href="#" label="Contactanos" image="Mundo.jpg" />
          <ImageLink href="#" label="Sobre Nosotros" image="Mundo.jpg" />
          <ImageLink href="#" label="Cursos" image="stars.jpg" />
          <ImageLink href="#" label="Idiomas" image="stars.jpg" />
          <ImageLink href="#" label="Sistemas para academias" image="stars.jpg" />
          <ImageLink href="#" label="Costo" image="stars.jpg" />
        </SimpleGrid >
        <SimpleGrid mt="4rem" columns={2} spacing="2rem">
          <Card>
            <Flex alignItems="center" mt="1rem">
              <Image w="64px" h="64px" border="black" src="Mundo.jpg" rounded="32px 32px" />
              <Text fontSize="md" ml="2rem">
                Creemos en tus sueños, creemos en vos, matricúlate en tu idioma favorito, cupos disponibles en italiano, japonés e inglés.
              </Text>
            </Flex>
          </Card>
          <Card>
            <Flex alignItems="center">
              <Image w="64px" h="64px" border="black" src="Mundo.jpg" rounded="32px 32px" />
              <Text fontSize="md" ml="2rem">
                Un nuevo año para nuevas experiencias y nuevos sueños, matricúlate en nuestros cursos, no solo es un idioma, es cultura, conocimiento, gastronomía y motivación, un idioma nuevo siempre será un plus.
              </Text>
            </Flex>
          </Card>
          <Card>
            <Flex alignItems="center">
              <Image w="64px" h="64px" border="black" src="Mundo.jpg" rounded="32px 32px" />
              <Text fontSize="md" ml="2rem">
                Creemos en tus sueños, creemos en vos
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
      </Layout>
      <Footer />
    </>
  )
}

export default withUrqlClient(urqlClient)(Home);
