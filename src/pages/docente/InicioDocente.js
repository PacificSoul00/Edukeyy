import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function InicioDocente(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/docente/inicio';
    const [bodyClass, setBodyClass] = useState('body-docente');
    const [asignaturas, setAsignaturas] = useState([]);
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
      useEffect(() => {
        // Asume que rut_profesor está almacenado en localStorage
        const rut_profesor = localStorage.getItem('rut');

        // Realiza una solicitud GET a tu API
        axios.get(`http://localhost:8000/api/asignaturas/?rut_profesor=${rut_profesor}`)
            .then(response => {
                // Guarda los datos de la respuesta en el estado
                setAsignaturas(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener las asignaturas:', error);
            });
    }, []);
    return(
        <div>
            <HeaderDocente/>
            <h3 class="texto-docente">Seleccione la asignatura la cual desea consultar</h3>
            <div className="contenedor-docente">
                {asignaturas.map(asignatura => (
                    <div key={asignatura.id_asignatura} className="asignatura">
                        <h3 className="texto-asignatura">{asignatura.nombre_asignatura}</h3>
                    </div>
                ))}
            </div>

</div>
    )
}
export default InicioDocente