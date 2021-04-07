import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../components/InputField';
import Layout from '../components/Layout';
import { useRegisterMutation } from '../generated/graphql';
import ErrorMap from '../utils/error-map';
import { urqlClient } from '../utils/urqlClient';

interface registerProps {}

// TO DO Cambiar mutacion
// Luego de que se cambie el proceso de registro, se tiene que cambiar la mutacion a un UserResponse

const Register : React.FC<registerProps>  = ({}) => {
    const router = useRouter();
    const [, register] = useRegisterMutation();
    return(
        <Layout size="small">
            <Formik
                initialValues={{name:"", password:"", email:""}}
                onSubmit={async (values, {setErrors}) => {
                    const res = await register(values);
                    if(res.data?.register.errors) {
                        setErrors(ErrorMap(res.data?.register.errors));
                    }else if(res.data?.register.user){
                        router.push('/');
                    }                    
                }}
            > 
                {({values, isSubmitting}) => (
                    <Form>
                        <InputField name="name" label="Name" placeholder="Name"/>
                        <Box mt={4}>
                            <InputField name="email" label="Correo Electrónico" placeholder="juan@ejemplo.com" type="email"/>
                        </Box>
                        <Box mt={4}>
                            <InputField name="password" label="Contraseña" placeholder="Contraseña" type="password"/>
                        </Box>
                        <Stack direction="column">
                            <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">Registrarse</Button>
                            <a href="http://localhost:8080/auth/facebook"><Button mt={4} type="button" colorScheme="facebook">Iniciar con Facebook</Button></a>
                        <a href="http://localhost:8080/google"><Button mt={4} type="button" colorScheme="gray">Iniciar con Google</Button></a>
                    </Stack>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
}

export default withUrqlClient(urqlClient)(Register);