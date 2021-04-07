import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Stack, Center, Text, Image  } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../components/InputField';
import Layout from '../components/Layout';
import { useRegisterMutation } from '../generated/graphql';
import ErrorMap from '../utils/error-map';
import { urqlClient } from '../utils/urqlClient';
import { Header } from "../components/Header";

interface registerProps {}

// TO DO Cambiar mutacion
// Luego de que se cambie el proceso de registro, se tiene que cambiar la mutacion a un UserResponse

const Register : React.FC<registerProps>  = ({}) => {
    const router = useRouter();
    const [, register] = useRegisterMutation();
    return(
        <>
        <Header />
        <Box bgGradient="linear(to-r, green.200, pink.500)" position="fixed" width="100%" height="100%" >
        <Center>
        <Box maxW="md" borderWidth="1px" borderRadius="lg" backgroundColor="white" width="100%" margin="1%" height="520px">
        <Text fontSize="28px" fontWeight="bold" padding="25px 25px 0 25px" color="#D7933A">Registrar</Text>
        <Layout>
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
                        <Stack>
                            <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">Registrarse</Button>
                            <hr/>
                            <a href="http://localhost:8080/auth/facebook"><Button width="100%" mt={1} type="button" colorScheme="facebook"><Image src="facebook_icon.png" boxSize="20px" borderRadius="full" marginX="7px"></Image>Iniciar con Facebook</Button></a>
                            <a href="http://localhost:8080/google"><Button width="100%" mt={1} type="button" colorScheme="gray"><Image src="gmail_icon.png" boxSize="20px" borderRadius="full" marginX="7px"></Image>Iniciar con Google</Button></a>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Layout>
        </Box>
        </Center>
        </Box>
        </>
    );
}

export default withUrqlClient(urqlClient)(Register);