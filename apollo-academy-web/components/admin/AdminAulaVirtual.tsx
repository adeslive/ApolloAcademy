import { Button, Td, Tr } from "@chakra-ui/react";
import React, { useState } from 'react';
import { classRoomProps } from '../Classroom';
import { useChangeClassRoomStateMutation } from "../../generated/graphql";

const AdminAulaVirtual : React.FC<classRoomProps> = ({ ... props}) => {
    const [active, setActive] = useState(props.enable);
    const [, changeState] = useChangeClassRoomStateMutation();
    return (
        <Tr>
            <Td>{props.id}</Td>
            <Td>{props.course.name}</Td>
            <Td>{props.description}</Td>
            <Td>{new Date(parseInt(props.createdAt)).toLocaleString()}</Td>
            <Td>{new Date(parseInt(props.updatedAt)).toLocaleString()}</Td>
            <Td><Button onClick={() => {
                setActive(!active);
                changeState({id: props.id, state: !active})
            }}  colorScheme={active? 'blue' : 'blackAlpha'}>{active ? 'Activo' : 'Inactivo'}</Button></Td>
            <Td>{props.course.language.name}</Td>
        </Tr>
    );
}

export default AdminAulaVirtual;