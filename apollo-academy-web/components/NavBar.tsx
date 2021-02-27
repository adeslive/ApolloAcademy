import { Box, Flex, Link } from '@chakra-ui/layout';
import React, { useState } from 'react';
import NextLink from 'next/link'
import { useLogoutMutation, useVerifyLoginQuery } from '../generated/graphql';
import { Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SearchIcon } from '@chakra-ui/icons';

interface navbarProps { }

export const NavBar: React.FC<navbarProps> = ({ }) => {
    const [{ data, fetching }] = useVerifyLoginQuery();
    const [{ fetching: fetchingLogout }, logout] = useLogoutMutation();
    const [focusSearch, setfocusSearch] = useState(false);

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
                <Button variant="link" onClick={() => {logout()}}>Cerrar sesión</Button>
            </Flex>
        );
    }

    return (
        <Flex p={4} bg={"#383d6e"} onMouseEnter={() => setfocusSearch(true)} onMouseLeave={() => setfocusSearch(false)}>
            <Flex color="white">
                <SearchIcon my={"auto"} mr={2} cursor={"pointer"}/>
                <Input type={"search"} _focus={{borderBottom: "1px", borderBottomColor: "white"}} width={"100%"} border={"transparent"} rounded={"0px"} borderRadius={"1px"} placeholder="Busqueda"/>
            </Flex>
            <Box ml={"auto"} my={"auto"} color="white">
                {body}
            </Box>
        </Flex>
    )
}