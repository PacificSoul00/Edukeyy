import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function InicioDirector(){
    const p_nombre = localStorage.getItem('p_nombre');
    const s_nombre = localStorage.getItem('s_nombre');
    const rol = localStorage.getItem('rol');
    const rut = localStorage.getItem('rut');
    const navigate = useNavigate();
    useEffect(() => {
        if (rol !== '4') { // Si el rol no es 2 (Docente)
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
            <header className="header body-pd" id="header">
            </header>
            <div className="l-navbar show" id="nav-bar">
                <nav className="nav">
                <div>
                    <a href="#" className="nav_logo">
                    <i className="bx bxs-key nav_logo-icon"></i>
                    <span className="nav_logo-name">Edukey</span>
                    </a>
                    <div className="nav_list">
                    <Link to='/secretario/inicio' className="nav_link">
                        <i className="bx bx-grid-alt nav_icon"></i>
                        <span className="nav_name">Inicio</span>
                    </Link>
                    </div>
                </div>
                <a href="#" className="nav_link">
                    <i className="bx bx-log-out nav_icon"></i>
                    <span onClick={handleLogout} className="nav_name">Cerrar Sesión</span>
                </a>
                </nav>
            </div>
        </div>
    )
}
export default InicioDirector