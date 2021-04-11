import { Box, Flex, Heading, SimpleGrid} from '@chakra-ui/layout';
import {  IconButton } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { useGetClassroomsQuery } from '../generated/graphql';
import { urqlClient } from "../utils/urqlClient";
import Classroom from '../components/Classroom';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const Cursos = () => {
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
            <Flex>
                {pagedClassrooms.map((value) => (
                            <Classroom size="small" {...value} key={value.id} />
                ))}
            </Flex>
        )
    }

    return (
        <>
            <Header />
            <Layout size="big">
                <SimpleGrid column={4}>
                        {all}
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default withUrqlClient(urqlClient)(Cursos);