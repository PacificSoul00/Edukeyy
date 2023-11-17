import {Routes, Route} from 'react-router-dom'
import IniciarSesion from './IniciarSesion';
import InicioDocente from './pages/docente/InicioDocente';
import DocenteAsignaturas from './pages/docente/Asignatura';
import InicioDirector from './pages/director-carrera/InicioDirector';
import VisualizarAsistenciaDirector from './pages/director-carrera/VisualizarAsistenciaDirector';
import MantenedorEstudiante from './pages/director-carrera/MantenedorEstudiante';
import SolicitudesDirector from './pages/director-carrera/SolicitudesDirector';
import AsignaturaMostrar from './pages/docente/AsignaturaMostrar';
import SolicitudDocente from './pages/docente/SolicitudDocente';
import SolicitudSecretario from './pages/director-carrera/SolicitudSecretario';
function Indice(){
    return(
        <div className='Indice'>
            <Routes>
                <Route path="/" element={<IniciarSesion/>}/>
                <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
                <Route path="/docente/inicio" element={<InicioDocente/>}/>
                <Route path="/docente/asignaturas/:sigla" element={<DocenteAsignaturas/>}/>
                <Route path="/docente/solicitud/:rut_alumno" element={<SolicitudDocente/>}/>
                <Route path="/secretario/asignatura" element={<SolicitudesDirector/>}/>
                <Route path="/secretario/inicio" element={<InicioDirector/>}/>
                <Route path="/secretario/visualizar-asistencia" element={<VisualizarAsistenciaDirector/>}/>
                <Route path="/secretario/mantenedor-estudiante" element={<MantenedorEstudiante/>}/>
                <Route path="/secretario/solicitudes" element={<SolicitudesDirector/>}/>
                <Route path="/secretario/solicitud/:id_solicitud" element={<SolicitudSecretario/>}/>
                <Route path="/docente/asignaturas/:sigla/:seccion" element={<AsignaturaMostrar/>}/>
            </Routes>
        </div>
    )
}
export default Indice