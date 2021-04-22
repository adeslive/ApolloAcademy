import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const AdminAulaVirtual= () => {
    return ( 
        <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                <Th>No</Th>
                <Th>Capacidad</Th>
                <Th>Link</Th>
                <Th>Profesor</Th>
                <Th>Curso</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>58</Td>
                    <Td>Http/local</Td>
                    <Td>Sara Olsen</Td>
                    <Td>Ingles</Td>
                    </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>40</Td>
                    <Td>Http/local</Td>
                    <Td>Sara Olsen</Td>
                    <Td>Ingles</Td>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>32</Td>
                    <Td>Http/local</Td>
                    <Td>Sara Olsen</Td>
                    <Td>Ingles</Td>
                </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th>into</Th>
                <Th>into</Th>
                </Tr>
            </Tfoot>
        </Table>
     );
}
 
export default AdminAulaVirtual;