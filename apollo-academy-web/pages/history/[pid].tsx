import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { Avatar, useForceUpdate } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { NavBar } from "../../components/NavBar";
import { useMyReceiptsQuery, useReceiptMutation } from "../../generated/graphql";
import { urqlClient } from "../../utils/urqlClient";


const History = () => {
    let receipts = null;
    const [receipt, setReceipt] = useState(null);
    const router = useRouter();
    const update = useForceUpdate();
    const { pid } = router.query;

    const id = typeof pid == 'string' && pid != '' ? pid : '-1';

    const [{ fetching, data }] = useMyReceiptsQuery()
    const [, getReceipt] = useReceiptMutation();

    const fetchInfo = async (id) => {
        const response = await getReceipt({ id: id });
        if (response.data) {
            let info = response.data.receipt;
            let date = new Date(parseInt(info.createdAt));

            setReceipt((
                <Box px="4rem" py="2rem" border={'1px'} borderColor='gray.200' backgroundColor='gray.100'>
                    <Heading as="h1" size="xl">
                        {info.virtual.course.name}
                    </Heading>
                    <Text as="sub" size="md">
                        Clase # {info.virtual.id}
                    </Text>

                    <Box mt="1rem">
                        <Heading as="h2" size="md">
                            Descripción
                        </Heading>
                        <Text my="2rem" px="2rem">" {info.virtual.description} "</Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="md">
                            Docente
                        </Heading>
                        <Flex >
                            <NextLink href={"/teacher/" + info.virtual.teacher.id} >
                                <Avatar size='lg' name={info.virtual.teacher.user.name} mt="2rem" mr="2em" cursor='pointer' />
                            </NextLink>
                            <Flex direction="column" mt="2rem">
                                <Text>{info.virtual.teacher.user.name}</Text>
                                <Text>{info.virtual.teacher.user.email}</Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box mt="2rem">
                        <Heading as="h2" size="md">
                            Información Relevante
                        </Heading>
                        <Text mt="2rem">Pagado: ${info.amount}</Text>
                        <Text>Fecha de pago: {date.toLocaleString()}</Text>
                    </Box>

                </Box>
            ))
            update();
        }
    }

    if (fetching) {

    } else if (!data && !data.myreceipts) {

    } else {
        receipts = (
            <>
                {data.myreceipts.map((value, mapIndex) => {
                    let fecha = new Date(parseInt(value.createdAt)).toLocaleString();
                    return (
                        <Box rounded="md" p="2rem" border={'1px'} borderColor='gray.200' backgroundColor='gray.100'>
                            <Text ml="auto" as="sup">{fecha}</Text>
                            <Link onClick={() => fetchInfo(value.id)}>
                                <Heading as="h3" size="sm">
                                    {value.id}
                                </Heading>
                            </Link>
                            <Text as="sub">Pagado por: ${value.amount}</Text>
                        </Box>
                    )
                })}
            </>
        )
    }



    return (<>
        <NavBar />
        <Layout size="big">
            <Flex gridGap={4} h='100%' >
                <Flex w={['25%']} flexDir={'column'} >
                    {receipts}
                </Flex>
                <Box w={['75%']} >
                    {receipt}
                </Box>
            </Flex>
        </Layout>
    </>)
}

export default withUrqlClient(urqlClient)(History);