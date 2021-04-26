import { Tabs, TabList, Tab, TabPanels, TabPanel, Thead, Table, TableCaption, Tbody, Tfoot, Th, Tr, Td } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Header } from '../../components/Header';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { urqlClient } from '../../utils/urqlClient';
import Layout from '../../components/admin/Layout';
import { useGetCoursesQuery } from '../../generated/graphql';
import AdminCurso from '../../components/admin/AdminCurso';

const AdminCourse = () => {
    const [{data, fetching}] = useGetCoursesQuery();
    let classrooms = null;

    if(fetching)
    {

    }else if(!data || !data.courses){
        
    }else{
        
        classrooms = data.courses.map((value, index) => <AdminCurso {...value}/>);
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
                                            <Th>Precio</Th>
                                            <Th>Fecha Creación</Th>
                                            <Th>Fecha Actualización</Th>
                                            <Th>Lenguaje</Th>
                                            <Th>Estado</Th>
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
                        {classrooms}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient)(AdminCourse);