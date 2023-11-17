import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../IniciarSesion.css';
import NavBarDirector from './components/NavBarDirector';
import { Link } from 'react-router-dom';

function SolicitudesDirector(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/secretario/mantenedor-estudiante';
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
                    <th scope="col">Fecha respuesta</th>
                    <th scope="col">Profesor</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Resultado</th>
                    <th scope="col">Modificar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>01</th>
                    <th>Modificación de Asistencia</th>
                    <th>28/09/2023</th>
                    <th>No hay respuesta</th>
                    <th>Rocio Bustos</th>
                    <th>Lorem ipsum dolor sit...</th>
                    <th>Pendiente</th>
                    <th><Link to={`/secretario/solocitud/`}><button type="button" class="btn btn-warning">Modificar estado</button></Link></th>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
export default SolicitudesDirector;