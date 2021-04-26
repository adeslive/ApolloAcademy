import { Box, Image, Stack, StackProps } from '@chakra-ui/react';
import React from 'react';

type CardProps = StackProps;

const Card : React.FC<CardProps> = ({children, ...props}) => {
    
    return (
        <Stack rounded="md" shadow="md" backgroundColor="gray.100" {...props} p={5}>
            <Box>
                {children}
            </Box>
        </Stack>
    );
}

export default Card;