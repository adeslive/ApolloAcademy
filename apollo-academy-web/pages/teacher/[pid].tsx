import { EmailIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Heading, HStack, IconButton, SimpleGrid, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import Classroom from "../../components/Classroom";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { useGetTeacherQuery } from "../../generated/graphql";
import { urqlClient } from "../../utils/urqlClient";

interface TeacherProps { }

const Teacher: React.FC<TeacherProps> = ({ }) => {
    const router = useRouter();
    const { pid } = router.query;
    const number = typeof router.query.pid === 'string' ? router.query.pid : '-1';
    const [{ data, fetching }] = useGetTeacherQuery({
        pause: number === '-1',
        variables: {
            id: number
        }
    });

    let info = null;
    let body = null;

    if (fetching) {

    } else if (!data.teacher) {
        router.push('http://18.189.235.128/')
    } else {

        info = (
            <>
                <Wrap>
                    <WrapItem>
                        <Avatar size="2xl" name={data.teacher.user.name} src="https://bit.ly/tioluwani-kolawole" />{" "}
                    </WrapItem>
                </Wrap>
                <Flex direction="column" ml="4rem">
                    <Heading as="h1" size="3xl">{data.teacher.user.name}</Heading>
                    <Text mt="1rem" size="md">{data.teacher.user.email}</Text>
                </Flex>
                <IconButton
                    ml="auto"
                    variant="outline"
                    colorScheme="blackAlpha"
                    aria-label="Send email"
                    role="link"
                    icon={<a href={"mailto:" + data.teacher.user.email}> <EmailIcon /> </a>}
                />
            </>
        )

        body = (
            <SimpleGrid columns={3} mt="2rem" bg="gray.100" spacing="2rem" p="1rem">
                {data.teacher.classrooms.map((value) => (
                    <Classroom {...value} />
                ))}
            </SimpleGrid>
        )
    }

    return (
        <>
            <Header />
            <Layout >
                <Flex w="100wh" h="100%" direction="column">
                    <Flex p="3rem" direction="row" bg="gray.100" rounded="md">
                        {info}
                    </Flex>

                    {body}
                </Flex>
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient, { ssr: true })(Teacher);