import { Button, Grid, GridItem } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Formik, Form } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { useCreateCheckoutSessionMutation } from "../../generated/graphql";
import { urqlClient } from "../../utils/urqlClient";
interface CourseProps { }

const Course: React.FC<CourseProps> = ({ }) => {
    const router = useRouter();
    const { cid } = router.query;

    const [, checkout] = useCreateCheckoutSessionMutation();
    const stripe = useStripe();
    const elements = useElements();

    return (
        <>
            <Header />
            <Layout>
                <Formik
                    initialValues={{ classroom: cid }}
                    onSubmit={
                        async () => {
                            if (!stripe || !elements) {
                                return;
                            }
                            
                            const res = await checkout();
                            if (res.data.createCheckout.errors) {
                                // Errores
                            } else {
                                const result = await stripe.redirectToCheckout({ sessionId: res.data.createCheckout.stripeID })
                                if (result.error) {

                                }
                            }
                        }}
                >
                    {({ values, isSubmitting }) => (
                        <Form>
                            <Grid
                                h="95vh"
                                w="95wh"
                                gap={4}
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(3, 1fr)"
                            >
                                <GridItem rowSpan={2} colSpan={1} bg="tomato">

                                </GridItem>
                                <GridItem rowSpan={2} colSpan={2} bg="tomato">
                                    <Button type="submit" w="100%" position="relative" top="94%" mr="4rem" colorScheme="blue">Comprar</Button>
                                </GridItem>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient)(Course);