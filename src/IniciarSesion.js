import React, { useState, useEffect } from 'react';
import logoedukey from './media/logo/Edukey.png';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function IniciarSesion() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({
            username: username,
            password: password
        });
        const response = await axios.post('http://134.122.112.248/api/usuarios/login/', {
            username: username,
            password: password
        });
        const rol = response.data.rol;
        const p_nombre = response.data.p_nombre;
        const s_nombre = response.data.s_nombre;
        const rut = response.data.rut;
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol);
        localStorage.setItem('p_nombre', p_nombre);
        localStorage.setItem('s_nombre', s_nombre);
        localStorage.setItem('rut', rut);
        if (rol == 1) {
            // Redirige al administrador a su página
            navigate('/admin');
        } else if (rol == 2) {
            // Redirige al docente a su página
            navigate('/docente/inicio');
        } else if (rol == 4) {
            // Redirige al director de carrera a su página
            navigate('/secretario/inicio');
        }
    };
    
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
                            <form onSubmit={handleSubmit}> 
                            <h1>Iniciar Sesión</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Nombre de usuario</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="rube.gonzalezc" value={username} onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="**********" value={password} onChange={e => setPassword(e.target.value)}></input>
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
