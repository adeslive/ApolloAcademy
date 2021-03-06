import { ChatIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import router from 'next/router';
import React, { useState } from 'react';
import { useLogoutMutation, useVerifyLoginQuery } from '../generated/graphql';

interface navbarProps { }

export const NavBar: React.FC<navbarProps> = ({ }) => {
    const [{ data, fetching }] = useVerifyLoginQuery();
    const [{ fetching: fetchingLogout }, logout] = useLogoutMutation();
    const [focusSearch, setfocusSearch] = useState(false);
    
    const {scrollY, scrollYProgress} = useViewportScroll();
    
    const logoutPage = () => {
        logout();
        router.push('/');
    }

    const Home = () =>{
        router.push('/Home')
    }
    
    let body = null;
    if (fetching) {

    } else if (!data?.verifyLogin) {
        body = (
            <>  
                <NextLink href="/" >
                    <Link mr={2} >Apollo Academy</Link>
                </NextLink>
                <NextLink href="/login">
                    <Link mr={2}>Iniciar Sesión</Link>
                </NextLink>
                <NextLink href="/register">
                    <Link>Registrarse</Link>
                </NextLink>
            </>
        )
    } else {
        body = (
            <Flex>
                <Button marginRight="500" variant="link" onClick={() => { router.push('/home') }}>Casa</Button>
                <Button right="450" variant="link" onClick={() => { router.push('/course/courses') }}>Cursos</Button>
                <Button right="400" variant="link" onClick={() => { router.push('/course/me') }}>Mis Cursos</Button>
                <Button right="350" variant="link" onClick={() => { router.push('/history/-1') }}>Historial</Button>
                <Box mr={2}>{data.verifyLogin.name}</Box>
                <Button variant="link" onClick={() => { logoutPage() }}>Cerrar sesión</Button>
            </Flex>
        );
    }

    return (
        <Flex p={4} backgroundColor="#130032" onMouseEnter={() => setfocusSearch(true)} onMouseLeave={() => setfocusSearch(false)}>
            
            <Box ml={"auto"} my={"auto"} color="white">
                {body}
            </Box>
        </Flex>
    )
}