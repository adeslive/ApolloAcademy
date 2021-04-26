
import { Box, Button, Flex, Heading, Link, SimpleGrid, Square, Text } from "@chakra-ui/react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import NextLink from 'next/link';
import { useRouter } from "next/router";
import React from "react";
import Classroom from "../../components/Classroom";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { useCreateCheckoutSessionMutation, useGetClassroomsQuery, useIsPaidQuery } from "../../generated/graphql";
import { urqlClient } from "../../utils/urqlClient";
import moment from 'moment';

interface CourseProps { }

const Course: React.FC<CourseProps> = ({ }) => {
    let classroom: typeof data.classrooms[0];
    let body = null;
    let formFunc = null;
    let buyButton = null;
    let info = null;
    let classCard = null;

    const router = useRouter();
    const { pid } = router.query;
    const number = typeof router.query.pid === 'string' ? router.query.pid : '-1';

    const [, checkout] = useCreateCheckoutSessionMutation();
    const [{ data, fetching }] = useGetClassroomsQuery();


    const stripe = useStripe();
    const elements = useElements();



    if (fetching) {

    } else if (!data && !data.classrooms && data.classrooms.length == 0) {

    } else {
        let index = data.classrooms.findIndex((room) => {
            if (room.id == number) {
                return room;
            }
        })

        classroom = data.classrooms[index];

        classCard = <Classroom {...classroom} />;

        info = (
            <>
                <Square w="100%" h="50%" bg="indigo" />
                <Flex w="100%" p="2rem" direction="column">
                    <Heading as="h3">{classroom.course.name}</Heading>
                    <br />
                    <Text as="sub">{classroom.course.language.name}</Text>
                    <br />
                </Flex>
            </>
        )

        body = (
            <SimpleGrid columns={3} mt="2rem" spacing="2rem" p="2rem">
                {data.classrooms.map((value, mapIndex) => {
                    if (index != mapIndex) {
                        return <Classroom {...value} size="small" />
                    }
                })}
            </SimpleGrid>
        )

        const [paid] = useIsPaidQuery({
            pause: number == '-1',
            variables: { id: number }
        })
        if (paid.fetching) {

        } else if (!paid.data) {

        } else {
            if (!paid.data.isPaid) {
                formFunc = async () => {
                    if (!stripe || !elements) {
                        return;
                    }

                    const res = await checkout({ id: classroom.course.id });
                    console.log(res);
                    if (res.data.createCheckout.stripeID) {
                        stripe.redirectToCheckout({ sessionId: res.data.createCheckout.stripeID });
                    }
                }

                let now = moment();
                let max = moment(parseInt(classroom.time_start));
                let min = moment(parseInt(classroom.time_start)).subtract(7, 'days');

                console.log(now)
                console.log(min)
                console.log(max)

                if(now >= min && now < max)
                {
                    buyButton = (
                        <Box mt="4rem" w="20%">
                            <Button type="submit" w="100%" mr="4rem" colorScheme="blue">Comprar</Button>
                        </Box>
                    )
                }else{
                    buyButton = (
                        <Box mt="4rem" w="20%">
                            <Button type="submit" w="100%" mr="4rem" colorScheme="gray" disabled>No disponible</Button>
                        </Box>
                    )
                }
            } else {
                buyButton = (
                    <Box mt="4rem" w="20%">
                        <Link w="100%" mr="4rem" color="teal">
                            <NextLink href={`./meeting/${classroom.link}`}>
                                Ingresar
                            </NextLink> 
                        </Link>
                    </Box>
                )
            }
        }
    }

    return (
        <>
            <Header />
            <Layout>
                <Formik
                    initialValues={{ classroom: pid }}
                    onSubmit={formFunc}
                >
                    {({ values, isSubmitting }) => (
                        <Form>
                            <Flex direction="row" w="100wh" h="80vh">
                                <Box rounded="md" shadow="md" w="30%" h="80%" borderColor="gray.100">
                                    {info}
                                </Box>
                                <Flex ml="2rem" direction="column" w="100%">
                                    <Flex w="100%" rounded="md" shadow="md" p="2rem">
                                        <Box w="80%">
                                            <Heading as="h4" mb="2rem">Clase actual</Heading>
                                            {classCard}
                                        </Box>

                                        {buyButton}
                                    </Flex>
                                    <Box rounded="md" shadow="md">
                                        {body}
                                    </Box>
                                </Flex>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient, { ssr: true })(Course);