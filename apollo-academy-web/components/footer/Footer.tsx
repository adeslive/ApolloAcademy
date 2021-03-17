import { ChatIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { Button, Input,Text,SimpleGrid,Image } from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { useLogoutMutation, useVerifyLoginQuery } from '../../generated/graphql';
import Card from '../../components/Card';

interface navbarProps { }

export const Footer: React.FC<navbarProps> = ({ }) => {
    const [{ data, fetching }] = useVerifyLoginQuery();
    const [{ fetching: fetchingLogout }, logout] = useLogoutMutation();
    const [focusSearch, setfocusSearch] = useState(false);
    
    const {scrollY, scrollYProgress} = useViewportScroll();
    
    
    let body = null;

    return (
        <>
        <Flex p={4} backgroundColor="#130032" >
        <SimpleGrid mt="0rem" columns={1} spacing="1rem">
            <Flex alignItems="center" mt="1rem">
              <Text fontSize="md" ml="2rem" color='#fff'>
                Telefono: +504 22807863
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Text fontSize="md" ml="2rem" color='#fff'>
                Correo: apolloacademy@gmail.com
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Text fontSize="md" ml="2rem" color='#fff'>
                Direccion: Colonia Kennedy, Tegucigalpa Honduras
              </Text>
            </Flex>
        </SimpleGrid>
        </Flex>
    </>
    )
}