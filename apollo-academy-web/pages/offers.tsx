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
          <Stack spacing={1} marginTop={["1rem", "3rem"]}>
            <Center>
              <Text
                fontSize="3xl"
                color={["white", "black"]}
                textAlign="center"
                fontWeight="700"
              >
                Ofertas para cursos de idiomas
              </Text>
            </Center>
          </Stack>  
        </Container>


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
            GARANTÍA DE PRECIO
            </Text>
          </Flex>
          <hr />
          <Card>
            <Flex alignItems="center" marginTop="10px">
              <Text fontSize="md" ml="2rem" color="black">
              En Apollo Academy te garantizamos el precio más económico del mercado para nuestros cursos de idiomas. 

            Si encuentras el mismo curso para la misma escuela y fechas más económico, ¡te reembolsaremos el 100% de la diferencia!
              </Text>
            </Flex>
          </Card>
          <Flex alignItems="center">
            <Text fontSize="md" ml="32rem" fontWeight="700">
            </Text>
          </Flex>
          <hr />
          <Card>
            <Flex alignItems="center" marginTop="10px">
              <Text fontSize="md" ml="2rem">
              Si realizas un curso de idiomas con uno o más amigos o familiares al mismo tiempo, todos obtendran un descuento.
              Oferta válida entre el 6/4/2021 al 31/5/2021
              </Text>
            </Flex>
          </Card>
        </Stack>

        <Flex alignItems="center" marginTop={["50px", "80px"]}>
          <Text fontSize="4xl" ml="32rem" color="black" fontWeight="700">
          Descuentos en: 
          </Text>
        </Flex>
        <hr />

        <SimpleGrid columns={4} spacing="2rem" mt="4rem">
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="1.jpg"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Precio normal: 20$
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
                Curso de Inglés
                
              </Box>

              <Box>
                Precio en Oferta: $10.00
                <Box as="span" color="orange.600" fontSize="sm">
                
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "orange.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  50 reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="2.png"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Precio normal: $50
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  3 Módulos &bull; 60 horas
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Curso de Francés
              </Box>

              <Box>
              Precio en oferta: 30$
                <Box as="span" color="gray.600" fontSize="sm">
                  
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                30 reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="3.jpg"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Precio normal: $45
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  2 Modulos &bull; 50 horas
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Curso de aleman
              </Box>

              <Box>
                Precio en oferta: $35
                <Box as="span" color="gray.600" fontSize="sm">
                  
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  40 reviews
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="20px;" overflow="hidden">
            <Image
              src="4.jpg"
              alt="Rear view of modern home with pool"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Precio normal: $45
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  3 Modulos &bull; 60 horas
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Curso de Italiano
              </Box>

              <Box>
                Precio en oferta: $25
                <Box as="span" color="gray.600" fontSize="sm">
                  
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  45 reviews
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
            <Text fontSize="3xl" ml="32rem" color="black" fontWeight="700">
             Se parte de nuestra academia
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
        
      </Layout>
      <Footer />
    </>
  );
};

export default withUrqlClient(urqlClient)(Home);