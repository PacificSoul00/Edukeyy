import React, { useState, useEffect } from 'react';
import LogoDuoc from '../../../media/logo/DuocUC.png';
import LogoEdukey from '../../../media/logo/Edukey.png';
function HeaderDocente(){
    return(
        <div>
            <header className="header-docente">
                <div className="header-pro">
                    <img className="logo" src={LogoEdukey} alt="" width="200px"></img>
                    <h1 className="titulo-docente">Bienvenido docente nombre</h1>
                    <img className="logo-duoc" src={LogoDuoc} alt="" width="400px" height="100px"></img>
                </div>
                <div className="docente-cerrar">
                    <a href="../../index.html"><button class="btn btn-danger">Cerrar Sesión</button></a>
                </div>
            </header>
        </div>
    )
}
export default HeaderDocente;