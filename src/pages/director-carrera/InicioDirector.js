import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../IniciarSesion.css';
import NavBarDirector from './components/NavBarDirector';
function InicioDirector(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/director-carrera/inicio';
    const [bodyClass, setBodyClass] = useState('body-pd height-100');
    useEffect(() => {
        // Carga el CSS solo si shouldLoadCss es true
        if (shouldLoadCss) {
            setBodyClass('body-pd height-100');
            document.body.className=bodyClass;
            
            // Aquí puedes hacer algo adicional después de cargar el CSS
            console.log('CSS cargado');
        }
      });
    return(
        <div>
            <NavBarDirector/>
            <h4>Portal Director de Carrera</h4>
            <h4>Inicio</h4>
        </div>
    )
}
export default InicioDirector