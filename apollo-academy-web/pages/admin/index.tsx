import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Header } from '../../components/Header';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { urqlClient } from '../../utils/urqlClient';
import Layout from '../../components/admin/Layout';

const Administracion = () => {

    return (
        <>
            <Header />
            <Layout>
                
            </Layout>
        </>
    );
}

export default withUrqlClient(urqlClient)(Administracion);