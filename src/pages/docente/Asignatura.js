import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Asignatura (){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/docente/asignaturas';
    const [bodyClass, setBodyClass] = useState('body-docente');
    const { sigla } = useParams();
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
        axios.get(`http://134.122.112.248/api/docente-asignatura/?rut=${rut_profesor}&sigla_asignatura=${sigla}`)
            .then(response => {
                // Accede al array dentro del objeto
                const asignaturasArray = response.data.registros_docente_asignaturas;
    
                // Guarda los datos de la respuesta en el estado
                setAsignaturas(asignaturasArray);
            })
            .catch(error => {
                console.error('Hubo un error al obtener las asignaturas:', error);
            });
    }, []);
  
return(

    <div>
        <HeaderDocente/>
        <div class="contenedor-asignatura">
        <div class="contenedor-asignatura-left">
            <div class="bloque-asignatura">
              <h2>Secciones</h2>
            {asignaturas.map(asignatura => (
                
                <div class="card tarjeta">
                    <Link to={`/docente/asignaturas/${asignatura.sigla_asignatura}/${asignatura.seccion}`} key={asignatura.id}>
                    <div class="card-body">
                      <h5 class="card-title">{asignatura.seccion}</h5>
                    </div>
                    </Link>
                  </div>
                  
                  ))}
            </div>
        </div>
        <div class="contenedor-asignatura-right">
        </div>
    </div>
    </div>
)
}
export default Asignatura;