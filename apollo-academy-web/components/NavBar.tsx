import { ChatIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { useLogoutMutation, useVerifyLoginQuery } from '../generated/graphql';

interface navbarProps { }

export const NavBar: React.FC<navbarProps> = ({ }) => {
    const [{ data, fetching }] = useVerifyLoginQuery();
    const [{ fetching: fetchingLogout }, logout] = useLogoutMutation();
    const [focusSearch, setfocusSearch] = useState(false);
    
    const {scrollY, scrollYProgress} = useViewportScroll();
    
    
    let body = null;
    if (fetching) {

    } else if (!data?.verifyLogin) {
        body = (
            <>
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
                <Box mr={2}>{data.verifyLogin.name}</Box>
                <Button variant="link" onClick={() => { logout() }}>Cerrar sesión</Button>
            </Flex>
        );
    }

    return (
        <Flex p={4} backgroundColor="#130032" onMouseEnter={() => setfocusSearch(true)} onMouseLeave={() => setfocusSearch(false)}>
            <Flex color="white">
                <Search2Icon my={"auto"} mr={2} cursor={"pointer"} />
                <Input type={"search"} _focus={{ borderBottom: "1px", borderBottomColor: "white" }} width={"100%"} border={"transparent"} rounded={"0px"} borderRadius={"1px"} placeholder="Busqueda" />
            </Flex>
            <Box ml={"auto"} my={"auto"} color="white">
                {body}
            </Box>
        </Flex>
    )
}