import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import axios from 'axios';

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
        console.log('Valor de sigla:', sigla);
        // Resto del código...
    }, [sigla]);
    useEffect(() => {
      // Asume que rut_profesor está almacenado en localStorage
      const rut_profesor = localStorage.getItem('rut');

      // Realiza una solicitud GET a tu API
      axios.get(`http://134.122.112.248/api/docente-asignatura/?rut=${rut_profesor}`)
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
        <div class="contenedor-asignatura">
        <div class="contenedor-asignatura-left">
            <div class="bloque-asignatura">
              <h2>Secciones</h2>
            {asignaturas.map(asignatura => (
                <div class="card tarjeta">
                    <div class="card-body">
                      <h5 class="card-title">{asignatura.seccion}</h5>
                    </div>
                  </div>
                  ))}
            </div>
        </div>
        <div class="contenedor-asignatura-right">
            <div class="buscador">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Buscador" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <button class="btn btn-warning" type="button" id="button-addon2">Buscar</button>
                  </div>
            </div>
            <div class="tabla-asignatura">
                <table class="table table-hover tabla-asignatura">
                    <thead>
                        <tr>
                            <th scope="col">UID - Tarjeta</th>
                            <th scope="col">Nombre del Alumno</th>
                            <th scope="col">Nombre asignatura</th>
                            <th scope="col">Fecha Registro</th>
                            <th scope="col">Estado alumno</th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr>
                          <td>Ejemplo</td>
                          <td>Ejemplo</td>
                          <td>Ejemplo</td>
                          <td>Ejemplo</td>
                          <td>Ejemplo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
)
}
export default Asignatura;