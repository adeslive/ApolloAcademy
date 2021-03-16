import { Box } from '@chakra-ui/layout';
import React from 'react';

interface LayoutProps {
    size?: string;
}

const Layout : React.FC<LayoutProps> = ({children, ...props}) => {
    return(
        <Box my={4} mx="auto" width={props.size === "small" ? "40%" : "80%"}>
            {children}
        </Box>
    );
}

export default Layout;