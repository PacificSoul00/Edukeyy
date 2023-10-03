import React, { useState, useEffect, useRef } from 'react';
import logoedukey from './media/Edukey.png';
import { useLocation } from 'react-router-dom';

function IniciarSesion() {
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/';
    const [bodyClass, setBodyClass] = useState('body-login');
    useEffect(() => {
        // Carga el CSS solo si shouldLoadCss es true
        if (shouldLoadCss) {
          import('./IniciarSesion.css').then((module) => {
            setBodyClass('body-login');
            document.body.className=bodyClass;
            // Aquí puedes hacer algo adicional después de cargar el CSS
            console.log('CSS cargado');
          });
        }
      }, [shouldLoadCss]);
  return (
    <div>
                <div className="texto-bienvenida">
                    <h1 className="titulo">Bienvenido al portal de Edukey</h1>
                </div>
                <div className="contenedores">
                    <div className="container-login">
                        <div className="container-login-left">
                            <img className="logo" src={logoedukey} alt="" width="200px"></img>
                        </div>
                        <div className="container-login-right">
                            <form action="asdsad">
                            <h1>Iniciar Sesión</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Rut</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="12345678-9"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="**********"></input>
                                <div id="passwordHelpBlock" className="form-text">
                                    Tu contraseña no debe tener menos de 8 caracteres.
                                    </div>
                                <div className="boton-login">
                                    <button type="submit" className="btn btn-dark btn-lg bt-login">Iniciar Sesión</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default IniciarSesion;