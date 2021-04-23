import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React from 'react';
import Layout from '../../components/Layout';
import { NavBar } from '../../components/NavBar';
import { urqlClient } from '../../utils/urqlClient';

const Courses = () => {

    return (
        <>
            <NavBar/>
            <Layout size='big'>
                <InputGroup>
                    <InputLeftElement 
                        pointerEvents='none'
                        children={<SearchIcon color="gray.300"/>}
                    />
                    <Input type='search' />
                </InputGroup>
            </Layout>
        </>
    )
}

export default withUrqlClient(urqlClient)(Courses);