import { Tabs, TabList, Tab, TabPanels, TabPanel, Thead, Table, TableCaption, Tbody, Tfoot, Th, Tr, Td, Box, Button, Stack } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Header } from '../../components/Header';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { urqlClient } from '../../utils/urqlClient';
import Layout from '../../components/admin/Layout';
import { useGetClassroomsQuery } from '../../generated/graphql';
import AdminCurso from '../../components/admin/AdminCurso';
import AdminAulaVirtual from '../../components/admin/AdminAulaVirtual';
import { Formik, Form } from 'formik';
import router from 'next/router';
import InputField from '../../components/InputField';
import ErrorMap from '../../utils/error-map';
import register from '../register';

const AdminCourse = () => {
    const [{ data, fetching }] = useGetClassroomsQuery();
    const [currentClassroom, setCurrentClassroom] = useState(-1);
    let classrooms = null;

    if (fetching) {

    } else if (!data || !data.classrooms) {

    } else {
        classrooms = data.classrooms.map((value, index) => <AdminAulaVirtual {...value} />);

    }

    return (
        <>
            <Header />
            <Layout>
                <Tabs>
                    <TabList>
                        <Tab>Buscar</Tab>
                        <Tab>Editar</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <PerfectScrollbar>
                                <Table variant="simple">
                                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Id</Th>
                                            <Th>Nombre</Th>
                                            <Th>Descripción</Th>
                                            <Th>Estado</Th>
                                            <Th>Fecha Creación</Th>
                                            <Th>Fecha Actualización</Th>
                                            <Th>Lenguaje</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {classrooms}
                                    </Tbody>
                                    <Tfoot>

                                    </Tfoot>
                                </Table>
                            </PerfectScrollbar>
                        </TabPanel>
                        <TabPanel>
                            
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient)(AdminCourse);