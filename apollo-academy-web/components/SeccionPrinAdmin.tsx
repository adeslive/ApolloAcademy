import React, { useContext, useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";
import AdminIdioma from './AdminIdioma';
import AdminCurso from './AdminCurso';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AdminAulaVirtual from './AdminAulaVirtual';


const SeccionPrinAdmin = () => {

    const [content, setContent] = useState(null); 

    return ( 
        <div className="contenedor-app">
            <aside>
                <h1>Administracion</h1>
                <div className="proyectos">
                </div>
                <Button bg="#D7933A" margin="5px" width="100%" onClick = {() => setContent(<AdminIdioma />)}> Agregar Idioma</Button>
                <Button bg="#D7933A" margin="5px" width="100%" onClick = {() => setContent(<AdminCurso />)}> Agregar Curso </Button>
                <Button bg="#D7933A" margin="5px" width="100%" onClick = {() => setContent(<AdminAulaVirtual />)} > Agregar Aula Virtual</Button>
            </aside>
            <div className="seccion-principal">
            <Tabs>
                <TabList>
                    <Tab>Buscar</Tab>
                    <Tab>Editar</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PerfectScrollbar>
                        {content}
                        </PerfectScrollbar>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            </div>
        </div>
     );
}
 
export default SeccionPrinAdmin;