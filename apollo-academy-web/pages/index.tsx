import { Header } from "../components/Header";
import { Footer } from "../components/footer/Footer";
import { withUrqlClient } from "next-urql";
import { urqlClient } from "../utils/urqlClient";
import { Container, Box, Stack, Center, Link } from "@chakra-ui/layout";
import Layout from "../components/Layout";
import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ImageLink } from "../components/ImageLink";
import React from "react";
import Card from "../components/Card";
import { Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import NextLink from 'next/link';
import router from 'next/router';
const Home = () => {
  return (
    <>
      <Header /> 
      <Layout size="big" >
        <Container centerContent>
          <Stack spacing={3} marginTop={["1rem", "3rem"]}>
            <Center>
              <Text
                fontSize="6xl"
                color={["white", "black"]}
                textAlign="center"
                fontWeight="700"
              >
                Apollo Academy
              </Text>
            </Center>
            <Center>
              <Text
                fontSize="1xl"
                color={["darkslategrey", "darkslategrey"]}
                textAlign="center"
                display={["none", "block"]}
              >
                Si quieres aprender los diferentes idiomas que existen en el
                mundo, ven y visitanos para ser parte del mejor aprendizaje,
                contamos con los mejores profesionales en lenguas extranjeras.
              </Text>
            </Center>
          </Stack>
          <Box
            position="absolute"
            zIndex={-1}
            top={0}
            left={0}
            margin={0}
            width="100%"
            height={["400px", "520px"]}
            backgroundColor="#C4C4C4"
            bgGradient="radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 10px),
          radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 5px), 
          radial-gradient(white, rgba(255,255,255,.1) 2px, 
          transparent 10px), radial-gradient(rgba(255,255,255,.4), 
          rgba(255,255,255,.1) 2px, transparent 5px)"
            backgroundSize="550px 550px, 350px 350px, 250px 250px, 150px 150px"
            backgroundPosition="0 0, 40px 60px, 130px 280px, 70px 100px"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 576 324"
            >
              <path
                id="Unnamed"
                fill="white"
                stroke="white"
                strokeWidth={2}
                d="M 576.00,243.00
              C 576.00,243.00 575.75,323.75 575.75,323.75
                575.75,323.75 0.00,323.75 0.00,323.75
                0.00,323.75 0.00,243.00 0.00,243.00
                0.00,243.00 289.00,351.00 576.00,243.00"
              />
            </svg>
          </Box>
        </Container>

        <Stack
          spacing={["1rem", "5rem"]}
          marginTop={["5rem", "12rem"]}
          direction={["column", "row"]}
        >
          <Box boxSize={["sm", "auto"]} textAlign="center">
            <Image src="Lenguas.png" width="1200px" height="100%" />
          </Box>
          <Stack spacing="1rem">
            <Card backgroundColor="#D7933A" borderRadius="20px;">
              <Text fontSize="xl" color="white" fontWeight="700">
                1
              </Text>
              <Box ml="3rem">
                <Text fontSize="xl" color="white">
                  Somos una academia de idiomas 100% hondureña
                </Text>
              </Box>
            </Card>
            <Card bgColor="#46C3D0" borderRadius="20px;">
              <Text fontSize="xl" color="white" fontWeight="700">
                2
              </Text>
              <Box ml="3rem">
                <Text fontSize="xl" color="white">
                  Te ofrecemos cursos de Inglés, Francés, Alemán, Italiano,
                  Portugués. Nuestros docentes son egresados de la carrera de
                  Lenguas Extranjeras de la Universidad Nacional Autónoma de
                  Honduras.
                </Text>
              </Box>
            </Card>
            <Card bgColor="#30032C" borderRadius="20px;">
              <Text fontSize="xl" color="white" fontWeight="700">
                3
              </Text>
              <Box ml="3rem">
                <Text fontSize="xl" color="white">
                  Aprende desde casa con nuestra modalidad virtual.
                </Text>
              </Box>
            </Card>
            <Card bgColor="#8E8D8D" borderRadius="20px;">
              <Text fontSize="xl" color="white" fontWeight="700">
                4
              </Text>
              <Box ml="3rem">
                <Text fontSize="xl" color="white">
                  Contamos con cursos de diferentes idiomas a través de nuestra
                  página web. Te ofrecemos un mejor futuro, no te quedes sin la
                  oportunidad de aprender ese idioma que siempre has querido 🌎
                </Text>
              </Box>
            </Card>
          </Stack>
        </Stack>

        <Stack marginTop={["50px", "80px"]} spacing={["1rem", "2rem"]}>
          <Box
            position="absolute"
            zIndex={-1}
            left={0}
            margin={0}
            width="100%"
            height={["600px", "550px"]}
            backgroundColor="#C4C4C4"
            marginTop="-15"
          ></Box>
          <Flex alignItems="center">
            <Text fontSize="md" ml="32rem" color="black" fontWeight="700">
              MISION
            </Text>
          </Flex>
          <hr />
          <Card>
            <Flex alignItems="center" marginTop="10px">
              <Text fontSize="md" ml="2rem" color="black">
                Somos una academia de idiomas 100% hondureña, contribuimos y
                trabajamos por el desarrollo del país, a través de la enseñanza
                de diferentes idiomas,contamos con los mejores profesionales de
                lenguas extranjeras en el país egresados de la Universidad
                Nacional Autónoma de Honduras, para que amigos, compañeros,
                estudiantes, familias, personas en general, puedan aprender
                nuevos idiomas, fomentando la paz, armonía y la unidad de toda
                la población.
              </Text>
            </Flex>
          </Card>
          <Flex alignItems="center">
            <Text fontSize="md" ml="32rem" fontWeight="700">
              VISION
            </Text>
          </Flex>
          <hr />
          <Card>
            <Flex alignItems="center" marginTop="10px">
              <Text fontSize="md" ml="2rem">
                Ser una empresa líder en el aprendizaje de nuevos idiomas a
                nivel nacional, por medio de la tecnología unir a todas las
                personas y formar una sociedad desarrollada.
              </Text>
            </Flex>
          </Card>
        </Stack>

        <Flex alignItems="center" marginTop={["50px", "80px"]}>
          <Text fontSize="6xl" ml="32rem" color="black" fontWeight="700">
            Nuestros Cursos
          </Text>
        </Flex>
        <hr />

        <SimpleGrid columns={3} spacing="2rem" mt="4rem">
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="CursosIdiomas.jpg"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  4 Modulos &bull; 48 horas
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                "Curso de Ingles"
              </Box>

              <Box>
                "$1,900.00"
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="CursosIdiomas.jpg"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  4 Modulos &bull; 48 horas
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                "Curso de Ingles"
              </Box>

              <Box>
                "$1,900.00"
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="CursosIdiomas.jpg"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  4 Modulos &bull; 48 horas
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                "Curso de Ingles"
              </Box>

              <Box>
                "$1,900.00"
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  34 reviews
                </Box>
              </Box>
            </Box>
          </Box>

        </SimpleGrid>

        <Stack marginTop={["50px", "80px"]} spacing={["1rem", "2rem"]}>
        <Box
            position="absolute"
            zIndex={-1}
            left={0}
            margin={0}
            width="100%"
            height={["700px", "750px"]}
            backgroundColor="#D7933A"
            marginTop="-15"
          ></Box>
          <Flex alignItems="center" marginTop={["50px", "80px"]}>
            <Text fontSize="6xl" ml="32rem" color="black" fontWeight="700">
              Apollo Academy
          </Text>
          </Flex>
          <hr />

          <SimpleGrid columns={3} spacing="2rem" mt="4rem" >
            <ImageLink href="#" label="Contactanos" image="Nosotros.jpeg" />
            <ImageLink href="#" label="Sobre Nosotros" image="logo.jpg" />
            <ImageLink href="#" label="Cursos" image="cursos.jpg" />
            <ImageLink href="#" label="Matrícula" image="matricula.jpg" />
            <ImageLink href="/#" label="Reportes" image="reportes.png" />
            <ImageLink href="/offers" label="Ofertas" image="costo.png" />
          </SimpleGrid>
        </Stack>
        
        <Stack  marginY={["50px", "80px"]}  spacing={["1rem", "2rem"]}>
        <SimpleGrid mt="4rem" columns={2} spacing="2rem" >
          <Card backgroundColor="#46C3D0">
            <Flex alignItems="center" mt="1rem">
              <Image
                w="64px"
                h="64px"
                border="black"
                src="Mundo.jpg"
                rounded="32px 32px"
              />
              <Text fontSize="md" ml="2rem">
                Creemos en tus sueños, creemos en vos, matricúlate en tu idioma
                favorito, cupos disponibles en italiano, japonés e inglés.
              </Text>
            </Flex>
          </Card>
          <Card>
            <Flex alignItems="center">
              <Image
                w="64px"
                h="64px"
                border="black"
                src="mundo1.jpg"
                rounded="32px 32px"
              />
              <Text fontSize="md" ml="2rem">
                Un nuevo año para nuevas experiencias y nuevos sueños,
                matricúlate en nuestros cursos, no solo es un idioma, es
                cultura, conocimiento, gastronomía y motivación, un idioma nuevo
                siempre será un plus.
              </Text>
            </Flex>
          </Card>
          <Card>
            <Flex alignItems="center">
              <Image
                w="64px"
                h="64px"
                border="black"
                src="mundo2.jpg"
                rounded="32px 32px"
              />
              <Text fontSize="md" ml="2rem">
                Forma parte de nuestra academia, ¡Matriculate ya!
              </Text>
            </Flex>
          </Card>
          <Card backgroundColor="#D7933A">
            <Flex alignItems="center">
              <Image
                w="64px"
                h="64px"
                border="black"
                src="idioma.png"
                rounded="32px 32px"
              />
              <Text fontSize="md" ml="2rem">
                Tu aprendizaje de idiomas esta garantizado sin importar en el
                nivel en que te encuentres.
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
        </Stack>
      </Layout>
      <Footer />
    </>
  );
};

export default withUrqlClient(urqlClient)(Home);
