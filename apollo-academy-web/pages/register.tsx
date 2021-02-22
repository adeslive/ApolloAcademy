import React from 'react';
import {Formik, Form} from 'formik';
import InputField from './components/InputField';
import { Box } from '@chakra-ui/layout';
import Layout from './components/Layout';

interface registerProps {}

const Register : React.FC<registerProps>  = ({}) => {
    return(
        <Layout>
            <Formik
                initialValues={{name: "", password:"", email:""}}
                onSubmit={(value, actions) => {
                    console.log(value);
                }}
            >
                {({values, handleChange}) => (
                    <Form>
                        <InputField name="name" label="Name" placeholder="Name"/>
                        <Box mt={4}>
                            <InputField name="email" label="Email" placeholder="Email" type="email"/>
                        </Box>
                        <Box mt={4}>
                            <InputField name="password" label="Password" placeholder="Password" type="password"/>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
}

export default Register;