import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Header } from '../../components/Header';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { urqlClient } from '../../utils/urqlClient';
import Layout from '../../components/admin/Layout';

const AdminLanguage = () => {

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

                            </PerfectScrollbar>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient)(AdminLanguage);