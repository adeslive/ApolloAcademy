import { Box } from '@chakra-ui/layout';
import React from 'react';

interface LayoutProps {}

const Layout : React.FC<LayoutProps> = ({children}) => {
    return(
        <Box mt={4} mx="auto" width="40%">
            {children}
        </Box>
    );
}

export default Layout;