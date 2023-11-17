import React, { useState, useEffect } from 'react';
import LogoDuoc from '../../../media/logo/DuocUC.png';
import LogoEdukey from '../../../media/logo/Edukey.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function HeaderDocente(){
    const p_nombre = localStorage.getItem('p_nombre');
    const s_nombre = localStorage.getItem('s_nombre');
    const rol = localStorage.getItem('rol');
    const rut = localStorage.getItem('rut');
    const navigate = useNavigate();
    useEffect(() => {
        if (rol !== '2') { // Si el rol no es 2 (Docente)
            localStorage.clear(); // Limpia el localstorage
            navigate('/'); // Redirige al usuario a la página de inicio de sesión
        }
    }, [rol]);
    const handleLogout = () => {
        // Elimina los datos del usuario del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('p_nombre');
        localStorage.removeItem('s_nombre');

        // Redirige al usuario a la página de inicio de sesión
        navigate('/');
    };
    return(
        <div>
            <header className="header-docente">
                <div className="header-pro">
                    <Link to={'/docente/inicio'}>
                    <img className="logo" src={LogoEdukey} alt="" width="200px"></img>
                    </Link>
                    <h1 className="titulo-docente">Bienvenid@ {p_nombre} {s_nombre}</h1>
                    <img className="logo-duoc" src={LogoDuoc} alt="" width="400px" height="100px"></img>
                </div>
                <div className="docente-cerrar">
                    <button onClick={handleLogout} class="btn btn-danger">Cerrar Sesión</button>
                </div>
            </header>
        </div>
    )
}
export default HeaderDocente;