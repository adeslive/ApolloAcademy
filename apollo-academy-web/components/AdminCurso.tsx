import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react";
import Scrollbar from 'react-perfect-scrollbar';

const AdminCurso= () => {
    return ( 
        <>
        <div>
        <Scrollbar>
        <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
                <Tr>
                <Th>Id</Th>
                <Th>Nombre</Th>
                <Th>Codigo</Th>
                <Th>Descripción</Th>
                <Th>Estado</Th>
                <Th>Fecha Creación</Th>
                <Th>Fecha Actualización</Th>
                <Th>Lenguaje</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1</Td>
                    <Td>Curso Ingles</Td>
                    <Td>4 Modulos &bull; 48 horas</Td>
                    <Td>Activo</Td>
                    <Td>2021-04-21 20:13:58.129693</Td>
                    <Td>2021-04-21 20:13:58.129693</Td>
                    <Td>Activo</Td>
                    <Td>Ingles</Td>
                    </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>Curso Ingles</Td>
                    <Td>4 Modulos &bull; 48 horas</Td>
                    <Td>Activo</Td>
                    <Td>2021-04-21 20:13:58.129693</Td>
                    <Td>2021-04-21 20:13:58.129693</Td>
                    <Td>Activo</Td>
                    <Td>Ingles</Td>
                </Tr>
                <Tr>
                    <Td>1</Td>
                    <Td>Curso Ingles</Td>
                    <Td>4 Modulos &bull; 48 horas</Td>
                    <Td>Activo</Td>
                    <Td>2021-04-21 20:13:58.129693</Td>
                    <Td>2021-04-21 20:13:58.129693</Td>
                    <Td>Activo</Td>
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
        </Scrollbar>
        </div>
        </>
     );
}
 
export default AdminCurso;