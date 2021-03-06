import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { NextRouter, useRouter } from "next/router";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { Text } from "@chakra-ui/react";
import ErrorMap from "../utils/error-map";
import { urqlClient } from "../utils/urqlClient";
import { useRestoreMutation } from "../generated/graphql";
import { join } from "node:path";
//import { usecoderestoreMutation } from '../generated/graphql';

const decodeParams = (input: string | string[]) => {
  if(typeof input === 'string'){
    return input;
  }else if(typeof input !== 'undefined'){
    return input.join('');
  }
  return '';
}



interface coderestoreProps { }

const coderestore: React.FC<coderestoreProps> = ({ }) => {
  const router = useRouter();
  const [, restore] = useRestoreMutation();

  const CheckConnection = () => {
    if(email === ''){
      router.push('/');
    }
    return(<></>);
  }

  const email = decodeParams(router.query.email);
  return (
    <Layout>
      <Formik
        
        initialValues={{ code: "", email: email}}
        
        onSubmit={async (values, { setErrors }) => {
          const res = await restore(values);
          if (res.data?.restore.errors) {
          } else if (res.data?.restore.user) {
            router.push({ pathname: "/changepassword", query: { email: values.email } });
          }
        }}
      >
        {({ values, isSubmitting }) => (
          
          <Form>
            <Text fontSize="2xl">Se ha enviado a su correo en codigo para la restauración de su contraseña</Text>
            <Text fontSize="2xl">Introduzca el código</Text>
            <Box mt={4}>
              <InputField name="code" label="Código" placeholder="_____" type="text" required />
            </Box>
            <Button mt={4} type="submit" colorScheme="teal">Restaurar contraseña</Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(urqlClient)(coderestore);
