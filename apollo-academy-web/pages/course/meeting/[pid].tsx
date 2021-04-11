import { Box } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Call from '../../../components/Call';
import { urqlClient } from "../../../utils/urqlClient";

const Meeting = () => {
    const router = useRouter();
    const {pid} = router.query;
    const url = typeof pid == 'string' ? pid : '-1';

    return (
        <Box h={'100vh'}>
            <Call url={url}/>
        </Box>
    )
}

export default withUrqlClient(urqlClient, {ssr: true})(Meeting);