import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';
import Layout from '../components/Layout';
import ErrorMap from '../utils/error-map';
import { urqlClient } from '../utils/urqlClient';
//import { userestorepasswordMutation } from '../generated/graphql';

interface restorepasswordProps {}


const restorepassword : React.FC<restorepasswordProps>  = ({}) => {
    const router = useRouter();
    //const [, restorepassword] = userestorepasswordMutation();
    const sendcode= () =>{
        router.push('/coderestore');
      }
    return(
        <Layout>
            <Formik
                initialValues={{email:""}}
                /*onSubmit={async (values, {setErrors}) => {
                    const res = await restorepassword(values);
                    if(res.data?.restorepassword.errors) {
                        setErrors(ErrorMap(res.data?.restorepassword.errors));
                    }else if(res.data?.restorepassword.user){
                        router.push('/');
                    }                    
                }}*/
            > 
                {({values}) => (
                    <Form>
                        <Box mt={4}>
                            <InputField name="email" label="Correo Electrónico" placeholder="juan@ejemplo.com" type="email"/>
                        </Box>
                        <Button mt={4} type="button" colorScheme="teal">Enviar Código</Button>

                    </Form>
                )}
            </Formik>
        </Layout>
    );
}

export default withUrqlClient(urqlClient)(restorepassword);