import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';
import Layout from '../components/Layout';
import { useGetcodeMutation } from '../generated/graphql';
import ErrorMap from '../utils/error-map';
import { urqlClient } from '../utils/urqlClient';

interface restorepasswordProps { }


const restorepassword: React.FC<restorepasswordProps> = ({ }) => {
    const router = useRouter();
    const [, getCode] = useGetcodeMutation();

    return (
        <Layout>
            <Formik
                initialValues={{ email: "" }}
                onSubmit={async (values, { setErrors }) => {
                    const res = await getCode(values);
                    if (res.data?.getCode.errors) {
                        setErrors(ErrorMap(res.data?.getCode.errors));
                    } else if (res.data?.getCode.user) {
                        router.push({ pathname: "/coderestore", query: { email: values.email } });
                    }
                }}
            >
                {({ values }) => (
                    <Form>
                        <Box mt={4}>
                            <InputField name="email" label="Correo Electrónico" placeholder="juan@ejemplo.com" type="email" />
                        </Box>
                        <Button mt={4} type="submit" colorScheme="teal">Enviar Código</Button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
}

export default withUrqlClient(urqlClient)(restorepassword);