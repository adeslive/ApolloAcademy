import { Box, Flex, Heading, Link, SimpleGrid, Square, Text } from '@chakra-ui/layout';
import { Avatar, Grid, GridItem, Stack } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { useGetActivitiesMutation, useGetClassroomDatesQuery, useMyCoursesQuery } from '../../generated/graphql';
import { urqlClient } from "../../utils/urqlClient";

const Cursos = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [value, onChange] = useState(new Date());
    const [activities, changeActivities] = useState(null);
    const [, getActivities] = useGetActivitiesMutation();
    const getCurrentActivities = async (date: Date) => {
        const temp = await getActivities({ date: date });
        if(temp.data && temp.data.activities)
        {
            changeActivities(
                <Box>
                    {
                        temp.data.activities.map((value, index) => (
                            <Box bgColor="gray.100" p="2" onClick={() => router.push('/course/' + value.id)} cursor="pointer" _hover={{backgroundColor:"blue.600", textColor: "white"}}>
                                
                                    <Text noOfLines={1} isTruncated>Curso: {value.course.name}</Text>
                                    <Text>{new Date(parseInt(value.time_start)).toLocaleTimeString()}</Text>
                                
                            </Box>
                        ))
                    }
                </Box>
            )
        }
    }

    let classrooms = null;
    let calendar = null;
    const [courses] = useMyCoursesQuery();
    const [dates] = useGetClassroomDatesQuery();

    if (dates.fetching) {

    } else if (!dates.data || !dates.data.classroomdates) {

    } else {
        let calendarDates = [];

        dates.data.classroomdates.forEach((value, index) => {
            calendarDates.push(new Date(value));
        })
        calendar = (
            <Calendar 
            activeStartDate={value}
            onChange={getCurrentActivities} 
            tileContent={({activeStartDate, date, view}) => {
                if(calendarDates.find((value : Date) => {
                    return (value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()) === (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
                }))

                return (<Square h={"50%"} w={"25%"} bgColor="red"></Square>)
            }}/>
        )
    }

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
                            {
                                value.classrooms[0].teacher &&
                                (
                                    <NextLink href={"/teacher/" + value.classrooms[0].teacher.id}>
                                        <Avatar name={value.classrooms[0].teacher.user.name} mt="2rem" mr="2em" />
                                    </NextLink>
                                )
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
                <SimpleGrid column={4}>
                    <Grid
                        h="100vh"
                        w="100wh"
                        templateRows="repeat(4, 1fr)"
                        templateColumns="repeat(4, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={4} p="2rem" colSpan={3} shadow="md" rounded="lg">
                            <Heading as="h2">Mis cursos</Heading>
                            {classrooms}
                        </GridItem>
                        <GridItem rowSpan={1} p="2rem" colSpan={1} shadow="md" rounded="lg">
                            <Heading as="h2">Actividades</Heading>
                            {calendar}
                        </GridItem>
                        <GridItem rowSpan={3} p="2rem" colSpan={1} shadow="md" rounded="lg">
                            <Stack maxH={'100%'} overflowY="scroll" >
                                {activities}
                            </Stack>
                        </GridItem>
                    </Grid>
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default withUrqlClient(urqlClient)(Cursos);