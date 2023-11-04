import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Inicio from '../InicioDirector'

function InicioDirector(){
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
                    <Link to='/director-carrera/inicio' className="nav_link">
                        <i className="bx bx-grid-alt nav_icon"></i>
                        <span className="nav_name">Inicio</span>
                    </Link>
                    <Link to="/director-carrera/visualizar-asistencia" className="nav_link">
                        <i className="bx bx-book-content nav_icon"></i>
                        <span className="nav_name vis-asis">Visualizacion de Asistencia</span>
                    </Link>
                    <Link to="/director-carrera/mantenedor-estudiante" className="nav_link">
                        <i className="bx bx-user nav_icon"></i>
                        <span className="nav_name vis-asis">Matenedor estudiantes</span>
                    </Link>
                    <Link to="/director-carrera/solicitudes" className="nav_link">
                        <i className="bx bx-folder nav_icon"></i>
                        <span className="nav_name">Solicitudes</span>
                    </Link>
                    </div>
                </div>
                <a href="#" className="nav_link">
                    <i className="bx bx-log-out nav_icon"></i>
                    <span className="nav_name">Cerrar Sesión</span>
                </a>
                </nav>
            </div>
        </div>
    )
}
export default InicioDirector