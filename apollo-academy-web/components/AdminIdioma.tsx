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
                <Td>1</Td>
                <Td>Ingles</Td>
                <Td>ING-25848</Td>
                <Td>Activo</Td>
                </Tr>
                <Tr>
                <Td>2</Td>
                <Td>Frances</Td>
                <Td>FRAN-49875</Td>
                <Td>Activo</Td>
                </Tr>
                <Tr>
                <Td>3</Td>
                <Td>Ruso</Td>
                <Td>RUS-89714</Td>
                <Td>Desactivo</Td>
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