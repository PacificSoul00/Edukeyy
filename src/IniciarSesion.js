import React, { useState, useEffect } from 'react';
import logoedukey from './media/logo/Edukey.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function IniciarSesion() {
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/iniciar-sesion';
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
        }else{
            setBodyClass('body-login');
            document.body.className=bodyClass;
        }
      });

    const [rut_usuario, setRutUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    
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
                            <form>
                            <h1>Iniciar Sesión</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Rut</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="12345678-9" value={rut_usuario} onChange={(e) => setRutUsuario(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="**********" value={contrasena} onChange={(e) => setContrasena(e.target.value)}></input>
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
