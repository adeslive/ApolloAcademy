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
import { Link, Text, Center, Image, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface loginProps {}

// TO DO Cambiar mutacion
// Luego de que se cambie el proceso de registro, se tiene que cambiar la mutacion a un UserResponse

const Login : React.FC<loginProps>  = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    
    return(
        <>
        <Header/>
        <Box bgGradient="linear(to-r, green.200, pink.500)" position="fixed" width="100%" height="100%" >
        <Center>
        <Box maxW="md" borderWidth="1px" borderRadius="lg" backgroundColor="white" width="100%" margin="1%" height="520px">
        <Text fontSize="28px" fontWeight="bold" padding="25px 25px 0 25px" color="#D7933A">Iniciar Sesión</Text>
        <Layout >
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
                {({isSubmitting}) => (
                <Form>
                        <InputField name="email" label="Correo Electrónico" placeholder="juan@ejemplo.com" type="email" />
                        <Box mt={4}>
                            <InputField name="password" label="Contraseña" placeholder="Contraseña" type="password"/>
                        </Box>
                        <Stack>
                            <Button mt={4} type="submit"  isLoading={isSubmitting} colorScheme="teal">Ingresar</Button>
                            <hr/>
                            <a href="http://18.189.235.128:8080/auth/facebook"><Button width="100%" mt={2} type="button" colorScheme="facebook"><Image src="facebook_icon.png" boxSize="20px" borderRadius="full" marginX="7px"></Image>Iniciar con Facebook</Button></a>
                            <a href="http://18.189.235.128:8080/google"><Button width="100%" mt={2} type="button" colorScheme="gray"><Image src="gmail_icon.png" boxSize="20px" borderRadius="full" marginX="7px"></Image>Iniciar con Google</Button></a>
                        </Stack>
                </Form>
                )}
            </Formik>
            <Box paddingTop="25px">
            <NextLink href="/restorepassword">
                <Link color="teal.500">Olvidaste tu contraseña<ExternalLinkIcon mx="2px" /></Link>
            </NextLink>
            </Box>
        </Layout>
        </Box>
        </Center>
        </Box>
        </>
    );
}

export default withUrqlClient(urqlClient)(Login);