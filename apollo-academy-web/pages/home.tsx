import { SimpleGrid, Text } from '@chakra-ui/layout';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React from "react";
import Card from '../components/Card';
import { Header } from "../components/Header";
import { ImageLink } from '../components/ImageLink';
import Layout from "../components/Layout";
import { urqlClient } from "../utils/urqlClient";


const HomeUser = () => {
    return (
        <>
            <Header />
            <Layout size="big">
                <Grid
                    h="100vh"
                    w="100wh"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(6, 1fr)"
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={2} bg="tomato" />
                    <GridItem colSpan={2} bg="papayawhip" />
                    <GridItem colSpan={2} bg="papayawhip" />
                    <GridItem colSpan={4} bg="tomato" />
                </Grid>

            </Layout>
        </>
    )
}

export default withUrqlClient(urqlClient)(HomeUser);