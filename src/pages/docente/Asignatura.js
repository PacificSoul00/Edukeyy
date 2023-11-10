import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import axios from 'axios';

function Asignatura (){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/docente/asignaturas';
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
        <div class="contenedor-asignatura">
        <div class="contenedor-asignatura-left">
            <div class="bloque-asignatura">
                <div class="card tarjeta">
                    <div class="card-body">
                      <h5 class="card-title">001D</h5>
                      <p class="card-text">LUN - MIE</p>
                    </div>
                  </div>
                  <div class="card tarjeta">
                    <div class="card-body">
                      <h5 class="card-title ">002D</h5>
                      <p class="card-text">LUN - MIE</p>
                    </div>
                  </div>
                  <div class="card tarjeta">
                    <div class="card-body">
                      <h5 class="card-title ">003D</h5>
                      <p class="card-text">LUN - MIE</p>
                    </div>
                  </div>
                  <div class="card tarjeta">
                    <div class="card-body">
                      <h5 class="card-title">004D</h5>
                      <p class="card-text">LUN - MIE</p>
                    </div>
                  </div>
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
                            <th scope="col">Fecha de Registro</th>
                            <th scope="col">Nombre del Alumno</th>
                        </tr>
                    </thead>
                    <tbody>
                          <tr>
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