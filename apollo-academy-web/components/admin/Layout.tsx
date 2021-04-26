import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return (
        <div className="contenedor-app">
            <div className="contenedor-app">
                <Sidebar />
                <div className="seccion-principal">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;