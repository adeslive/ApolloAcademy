import React from 'react';
import { Header } from '../components/Header';
import SeccionPrinAdmin from '../components/SeccionPrinAdmin';
import Sidebar from '../components/Sidebar';

const Administracion = () => {
    return ( 
        <>
        <Header/>
        <div className="contenedor-app">
            <SeccionPrinAdmin/>
        </div>
        </>
     );
}
 
export default Administracion;