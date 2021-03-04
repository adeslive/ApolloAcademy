import { Box, Image, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import React, { useState } from "react";

type ImageLinkProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    href: string;
    image: string;
};

export const ImageLink : React.FC<ImageLinkProps> = ({...props}) => {
    const [hover, setHover] = useState(false);

    return(
        <NextLink href={props.href}>
            <Box onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} cursor="pointer" position="relative" width="100%">
                <Image src={props.image} objectFit="cover" display="block"/>
                <Box display={"flex"} _hover={{"opacity": "1"}}  opacity="0" backgroundColor="rgba(0,0,0,0.5)"  left="0" top="0" position="absolute" bottom="0" right="0" width="100%" height="100%">
                    <Link textColor="white" width="100%" textAlign="center" transform={"translate(0%, 50%)"}>{props.label}</Link>
                </Box>
            </Box>    
        </NextLink>
    );
}