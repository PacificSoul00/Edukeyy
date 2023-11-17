import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../IniciarSesion.css';
import NavBarDirector from './components/NavBarDirector';
import axios from 'axios';
import { Link } from 'react-router-dom';
function InicioDirector(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/secretario/inicio';
    const [bodyClass, setBodyClass] = useState('body-pd height-100');
    const [solicitudes, setSolicitudes] = useState([]);
    useEffect(() => {
        // Carga el CSS solo si shouldLoadCss es true
        if (shouldLoadCss) {
            setBodyClass('body-pd height-100');
            document.body.className=bodyClass;
            
            // Aquí puedes hacer algo adicional después de cargar el CSS
            console.log('CSS cargado');
        }
      });
    useEffect(() => {
        axios.get('http://134.122.112.248/api/solicitudes/')
            .then(res => {
                const solicitudesConProfesores = res.data.map(solicitud => {
                    return axios.get(`http://134.122.112.248/api/usuarios/usuario/${solicitud.rut_profesor}`)
                        .then(res => {
                            return { ...solicitud, nombre_profesor: `${res.data.nombre} ${res.data.apellido}` };
                        });
                });

                Promise.all(solicitudesConProfesores)
                    .then(solicitudes => {
                        setSolicitudes(solicitudes);
                    });
            })
            .catch(err => console.log(err));
    }, []);
      return(
        <div>
        <NavBarDirector/>
        <h4>Portal Secretaria Docente</h4>
        <h4>Gestor de Solicitudes</h4>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Buscador" aria-label="Recipient's username" aria-describedby="button-addon2"></input>  
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
        </div>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">ID Solicitud</th>
                    <th scope="col">Tema</th>
                    <th scope="col">Fecha solicitud</th>
                    <th scope="col">Profesor</th>
                    <th scope="col">Alumno</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Razon</th>
                    <th scope="col">Resultado</th>
                    <th scope="col">Modificar</th>
                </tr>
            </thead>
            <tbody>
                {solicitudes.map(solicitud => (
                    <tr key={solicitud.id_solicitud}>
                        <th>{solicitud.id_solicitud}</th>
                        <th>{solicitud.tema}</th>
                        <th>{solicitud.fecha_creacion}</th>
                        <th>{solicitud.nombre_profesor}</th>
                        <th>{solicitud.rut_alumno}</th>
                        <th>{solicitud.descripcion}</th>
                        <th>{solicitud.razon}</th>
                        <th>{solicitud.tipo_respuesta === 3 ? 'Pendiente' : solicitud.tipo_respuesta === 2 ? 'Rechazado' : 'Aprobado'}</th>
                        <th><Link to={`/secretario/solicitud/${solicitud.id_solicitud}`}><button type="button" class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg></button></Link></th>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default InicioDirector
