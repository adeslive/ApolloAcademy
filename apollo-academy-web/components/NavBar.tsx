import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link'
import { useLogoutMutation, useVerifyLoginQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/react';

interface navbarProps { }

export const NavBar: React.FC<navbarProps> = ({ }) => {
    const [{ data, fetching }] = useVerifyLoginQuery();
    const [{ fetching: fetchingLogout }, logout] = useLogoutMutation();

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
        <Flex p={4} bg={"#383d6e"}>
            <Box ml={"auto"} color="white">
                {body}
            </Box>
        </Flex>
    )
}