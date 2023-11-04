import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import { Link } from 'react-router-dom';
function InicioDocente(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/docente/inicio';
    const [bodyClass, setBodyClass] = useState('body-docente');
    useEffect(() => {
        // Carga el CSS solo si shouldLoadCss es true
        if (shouldLoadCss) {
            setBodyClass('body-docente');
            document.body.className=bodyClass;
            // Aquí puedes hacer algo adicional después de cargar el CSS
            console.log('CSS cargado');
          ;
        }
      });
    return(
        <div>
            <HeaderDocente/>
            <h3 class="texto-docente">Seleccione la asignatura la cual desea consultar</h3>
            <div class="contenedor-docente">
                <Link to="/docente/asignaturas">
                <div class="asignatura">
                    <h3 class="texto-asignatura">Modelamiento de base de datos</h3>
                </div>
            </Link>
            <a href="">
            <div class="asignatura">
                <h3 class="texto-asignatura">Ingeniería de Software</h3>
            </div>
            </a>
            <a href="">
            <div class="asignatura">
                <h3 class="texto-asignatura">Evaluación de Proyectos</h3>
            </div>
        </a>

    </div>
        </div>
    )
}
export default InicioDocente