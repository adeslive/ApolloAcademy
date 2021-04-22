import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

const AdminIdioma = () => {
    return ( 
        <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                <Th>Id</Th>
                <Th>Nombre</Th>
                <Th>Codigo</Th>
                <Th>Estado</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
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
 
export default AdminIdioma;