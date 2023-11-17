import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../IniciarSesion.css';
import NavBarDirector from './components/NavBarDirector';
import { useNavigate } from 'react-router-dom';

function VisualizarAsistenciaDirector(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/secretario/visualizar-asistencia';
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
            <h4>Visualización de asistencia</h4>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Buscador" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Asignatura</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">Sección</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Cantidad de alumnos</th>
                        <th scope="col">Porcentaje de asistencia</th>
                        <th scope="col">Ver mas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Ingeniería de Software</th>
                        <th>Ingeniería en Informatica</th>
                        <th>003D</th>
                        <th>Rocio Bustos</th>
                        <th>35</th>
                        <th>85%</th>
                        <th><button type="button" class="btn btn-warning">+</button></th>
                    </tr>
                    <tr>
                        <th>Machine Learning</th>
                        <th>Ingeniería en Informatica</th>
                        <th>003D</th>
                        <th>Israel Naranjo</th>
                        <th>35</th>
                        <th>85%</th>
                        <th><a href="ver-mas.html"><button type="button" class="btn btn-warning">+</button></a></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default VisualizarAsistenciaDirector;