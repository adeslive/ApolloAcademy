import React from 'react';
import { Header } from '../components/Header';
import SeccionPrinAdmin from '../components/SeccionPrinAdmin';

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