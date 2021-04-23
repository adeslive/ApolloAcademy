import { Box, Flex, Heading, Link, SimpleGrid, Square, Text } from '@chakra-ui/layout';
import { Avatar, Button, Grid, GridItem, IconButton } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { useGetClassroomsQuery, useMyCoursesQuery } from '../generated/graphql';
import { urqlClient } from "../utils/urqlClient";
import Classroom from '../components/Classroom';
import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const HomeUser = () => {
    const router = useRouter();
    const [{ data, fetching }] = useGetClassroomsQuery();
    const [page, setPage] = useState(1);
    
    let classrooms = null;
    let all = null;
    let max = 0;


    if (fetching) {

    } else if (!data || !data.classrooms) {

    } else {
        let pagedClassrooms = data.classrooms.slice(page - 1, page + 1);
        max = Math.round(data.classrooms.length / 2);

        all = (
            <Box>
                <Flex>
                    <Heading as="h2">Cursos</Heading>
                    <Box ml="auto">
                        <IconButton mr="2rem" onClick={() => page > 1 && setPage(page - 1)} colorScheme="blue" aria-label="Previous Page" icon={<ChevronLeftIcon />} />
                        <IconButton onClick={() => page <= max && setPage(page + 1)} ml="" colorScheme="blue" aria-label="Next Page" icon={<ChevronRightIcon />} />
                    </Box>
                </Flex>

                <Flex columns={2} mt="2rem">
                    {pagedClassrooms.map((value) => (
                        <Box mr="1.5rem">
                            <Classroom size="small" {...value} key={value.id} />
                        </Box>
                    ))}
                </Flex>
            </Box>
        )
    }

    const [courses] = useMyCoursesQuery();

    if (courses.fetching) {

    } else if (!courses.data || !courses.data.mycourses) {

    } else {
        classrooms = (
            <SimpleGrid columns={2} mt="2rem" spacing="2rem" px="1rem">
                {courses.data.mycourses.map((value, mapIndex) => {
                    return (
                        <Flex border="1px" borderColor="gray.100" w={'14rem'} rounded="lg" bg="white" shadow="md" >
                            <Square bg="indigo" w="10%" />

                            <Box p="2rem">
                                <Text ml="auto" as="sup">#{value.classrooms[0].id}</Text>
                                <NextLink href={"/course/" + value.classrooms[0].id}>
                                    <Link>
                                        <Heading as="h3" size="sm">
                                            {value.name}
                                        </Heading>
                                    </Link>
                                </NextLink>
                                <Text as="sub">{value.name}</Text>
                            </Box>
                            {value.classrooms[0].teacher &&
                                (<NextLink href={"/teacher/" + value.classrooms[0].teacher.id}>

                                    <Avatar name={value.classrooms[0].teacher.user.name} mt="2rem" mr="2em" />

                                </NextLink>)
                            }
                        </Flex>
                    )
                })}
            </SimpleGrid>
        )
    }

    return (
        <>
            <Header />
            <Layout size="big">
                <Grid

                    h="100vh"
                    w="100wh"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={4}
                >
                    <GridItem rowSpan={2} p="2rem" colSpan={2} shadow="md" rounded="lg">
                        <Heading as="h2">Mis cursos</Heading>
                        {classrooms}
                    </GridItem>
                    <GridItem p="2rem" colSpan={2} shadow="md" rounded="lg">
                        {all}
                    </GridItem>
                    <GridItem p="2rem" colSpan={2}>
                        <Box shadow="md" rounded="lg" height="95%">
                            <Heading as="h2">Cursos Recomendados</Heading>
                        </Box>
                        
                        <Button colorScheme="blue" width="100%" onClick={() => router.push('/course/calendar')}>
                            Ver calendario de matriculas <ArrowForwardIcon h={8} w={8} />
                        </Button>
                    </GridItem>
                </Grid>

            </Layout>
        </>
    )
}

export default withUrqlClient(urqlClient)(HomeUser);