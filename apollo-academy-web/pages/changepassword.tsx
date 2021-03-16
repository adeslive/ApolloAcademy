import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { Alert, Text } from "@chakra-ui/react";
import ErrorMap from "../utils/error-map";
import { urqlClient } from "../utils/urqlClient";
import { useChangePasswordMutation, useRestoreMutation } from "../generated/graphql";
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

interface changePasswordProps { }

const changePassword: React.FC<changePasswordProps> = ({ }) => {
  const router = useRouter();
  const [, changePass] = useChangePasswordMutation();

  const email = decodeParams(router.query.email);

  return (
    <Layout>
      <Formik
        initialValues={{email: email, password: "", passwordr:""}}
        onSubmit={async (values, { setErrors }) => {
          const res = await changePass(values);
          if (res.data?.changePassword.errors) {
            setErrors(ErrorMap(res.data?.changePassword.errors));
          } else if (res.data?.changePassword.user) {
            router.push('/');
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Text fontSize="2xl">Nueva Contraseña</Text>
            <Box mt={4}>
              <InputField name="password" label="Nueva contraseña" placeholder="" type="password" required />
            </Box>
            <Text fontSize="2xl">Repetir Contraseña</Text>
            <Box mt={4}>
              <InputField name="passwordr" label="Repetir contraseña" placeholder="" type="password" required />
            </Box>
            <Button mt={4} type="submit" colorScheme="teal">Restaurar contraseña</Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(urqlClient)(changePassword);
