import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import InputField from "../components/InputField";
import Layout from "../components/Layout";
import { Text } from "@chakra-ui/react";
import ErrorMap from "../utils/error-map";
import { urqlClient } from "../utils/urqlClient";
//import { usecoderestoreMutation } from '../generated/graphql';

interface coderestoreProps {}

const coderestore: React.FC<coderestoreProps> = ({}) => {
  const router = useRouter();
  //const [, coderestore] = coderestoreMutation();
  const restorepassword = () =>{
    router.push('/')
  }
  return (
    <Layout>
      <Formik
      /* initialValues={{email:""}}
                onSubmit={async (values, {setErrors}) => {
                    const res = await restorepassword(values);
                    if(res.data?.restorepassword.errors) {
                        setErrors(ErrorMap(res.data?.restorepassword.errors));
                    }else if(res.data?.restorepassword.user){
                        router.push('/');
                    }                    
                }}*/
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Text fontSize="2xl">Se ha enviado a su correo en codigo para la restauración de su contraseña</Text>
            <Text fontSize="2xl">Introduzca el código</Text>
            <Box mt={4}>
              <InputField name="codigo" label="Código" placeholder="_____" type="text"/>
            </Box>
            <Button mt={4} type="button" onClick = { () => restorepassword } colorScheme="teal">Restaurar contraseña</Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(urqlClient)(coderestore);
