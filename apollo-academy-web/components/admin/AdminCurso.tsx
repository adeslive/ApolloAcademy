import { Button, Td, Tr } from "@chakra-ui/react";
import React, { useState } from 'react';
import { useChangeCourseStateMutation } from "../../generated/graphql";

const AdminCurso = ({ ... props}) => {
    const [active, setActive] = useState(props.active);
    const [, changeState] = useChangeCourseStateMutation();
    return (
        <Tr>
            <Td>{props.id}</Td>
            <Td>{props.name}</Td>
            <Td>{props.price}</Td>
            <Td>{new Date(parseInt(props.createdAt)).toLocaleString()}</Td>
            <Td>{new Date(parseInt(props.updatedAt)).toLocaleString()}</Td>
            <Td><Button onClick={() => {
                setActive(!active);
                changeState({id: props.id, state: !active})
            }}  colorScheme={active? 'blue' : 'blackAlpha'}>{active ? 'Activo' : 'Inactivo'}</Button></Td>
            <Td>{props.language.name}</Td>
        </Tr>
    );
}

export default AdminCurso;


