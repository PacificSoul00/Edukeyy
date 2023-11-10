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
        axios.get(`http://localhost:8000/api/docente-asignatura/?rut=${rut_profesor}`)
            .then(response => {
                // Guarda los datos de la respuesta en el estado
                setAsignaturas(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener las asignaturas:', error);
            });
    }, []);
    
    const [asignaturasCompletas, setAsignaturasCompletas] = useState([]);
  useEffect(() => {
    // Obtener la información completa de las asignaturas desde la segunda API
    axios.get('http://localhost:8000/api/asignaturas/')
      .then(response => {
        // Crear un mapa para buscar fácilmente las asignaturas por sigla
        const asignaturasMap = new Map(response.data.map(asignatura => [asignatura.sigla_asignatura, asignatura]));

        // Combinar la información de ambas APIs
        const asignaturasConNombre = asignaturas.map(asignatura => ({
          ...asignatura,
          nom_asignatura: asignaturasMap.get(asignatura.sigla_asignatura)?.nom_asignatura || 'Nombre no encontrado',
        }));

        // Actualizar el estado con las asignaturas completas
        setAsignaturasCompletas(asignaturasConNombre);
      })
      .catch(error => {
        console.error('Hubo un error al obtener la información completa de las asignaturas:', error);
      });
  }, [asignaturas]);
    console.log(asignaturas);
    return(
        <div>
            <HeaderDocente/>
            <h3 class="texto-docente">Seleccione la asignatura la cual desea consultar</h3>
            <div className="contenedor-docente">
                {asignaturasCompletas.map(asignatura => (
                    <div className="asignatura">
                     <Link to={`/asignatura/${asignatura.sigla_asignatura}`} key={asignatura.id}>
                        <h3 className="texto-asignatura">{asignatura.sigla_asignatura} - {asignatura.nom_asignatura}</h3>
                    </Link>

                    </div>
                ))}
            </div>

</div>
    )
}
export default InicioDocente