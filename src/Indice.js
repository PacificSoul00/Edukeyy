import {Routes, Route} from 'react-router-dom'
import IniciarSesion from './IniciarSesion';
import InicioDocente from './pages/docente/InicioDocente';
import DocenteAsignaturas from './pages/docente/Asignatura';
import InicioDirector from './pages/director-carrera/InicioDirector';
import VisualizarAsistenciaDirector from './pages/director-carrera/VisualizarAsistenciaDirector';
import MantenedorEstudiante from './pages/director-carrera/MantenedorEstudiante';
import SolicitudesDirector from './pages/director-carrera/SolicitudesDirector';

function Indice(){
    return(
        <div className='Indice'>
            <Routes>
                <Route path="/" element={<IniciarSesion/>}/>
                <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
                <Route path="/docente/inicio" element={<InicioDocente/>}/>
                <Route path="/docente/asignaturas/:sigla" element={<DocenteAsignaturas/>}/>
                <Route path="/director-carrera/asignatura" element={<SolicitudesDirector/>}/>
                <Route path="/director-carrera/inicio" element={<InicioDirector/>}/>
                <Route path="/director-carrera/visualizar-asistencia" element={<VisualizarAsistenciaDirector/>}/>
                <Route path="/director-carrera/mantenedor-estudiante" element={<MantenedorEstudiante/>}/>
                <Route path="/director-carrera/solicitudes" element={<SolicitudesDirector/>}/>
            </Routes>
        </div>
    )
}
export default Indice