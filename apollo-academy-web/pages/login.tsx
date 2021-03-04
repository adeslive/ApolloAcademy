import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';
import Layout from '../components/Layout';
import { useLoginMutation } from '../generated/graphql';
import ErrorMap from '../utils/error-map';
import { urqlClient } from '../utils/urqlClient';
import NextLink from 'next/link';
import { Link } from "@chakra-ui/react";

interface loginProps {}

// TO DO Cambiar mutacion
// Luego de que se cambie el proceso de registro, se tiene que cambiar la mutacion a un UserResponse

const Login : React.FC<loginProps>  = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    return(
        <Layout>
            <Formik
                initialValues={{password:"", email:""}}
                onSubmit={async (values, {setErrors}) => {
                    const res = await login(values);
                    if(res.data?.login.errors) {
                        setErrors(ErrorMap(res.data?.login.errors));
                    }else if(res.data?.login.user){
                        router.push('/');
                    }                    
                }}
            > 
                {({values, isSubmitting}) => (
                    <Form>
                        <InputField name="email" label="Correo Electrónico" placeholder="juan@ejemplo.com" type="email"/>
                        <Box mt={4}>
                            <InputField name="password" label="Contraseña" placeholder="Contraseña" type="password"/>
                        </Box>
                        <Button mt={4} type="submit"  isLoading={isSubmitting} colorScheme="teal">Ingresar</Button>
                    </Form>
                )}
            </Formik>
            <NextLink href="/restorepassword" >
                <Link color="teal.500">Olvidaste tu contraseña</Link>
            </NextLink>
        </Layout>
    );
}

export default withUrqlClient(urqlClient)(Login);