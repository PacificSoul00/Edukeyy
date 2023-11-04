import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../IniciarSesion.css';
import NavBarDirector from './components/NavBarDirector';

function MantenedorEstudiante(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/director-carrera/mantenedor-estudiante';
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
            <h4>Mantenedor Estudiantes</h4>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Buscador" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
            </div>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Estudiante</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">Rut</th>
                        <th scope="col">Correo electronico</th>
                        <th scope="col">Télefono</th>
                        <th scope="col">Coordinador</th>
                        <th scope="col">Modificar estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Ruben Gonzalez</th>
                        <th>Ingeniería en Informatica</th>
                        <th>99.999.999-9</th>
                        <th>a@hotmail.com</th>
                        <th>+56 9 9999 9999</th>
                        <th>AAA</th>
                        <th><button type="button" class="btn btn-warning">Modificar estado</button></th>
                    </tr>
                    <tr>
                        <th>Ruben Gonzalez</th>
                        <th>Ingeniería en Informatica</th>
                        <th>99.999.999-9</th>
                        <th>a@hotmail.com</th>
                        <th>+56 9 9999 9999</th>
                        <th>AAA</th>
                        <th><a href="ver-mas-estudiante.html"><button type="button" class="btn btn-warning">Modificar estado</button></a></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default MantenedorEstudiante;