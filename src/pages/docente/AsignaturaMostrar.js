import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AsignaturaMostrar (){
    
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/docente/asignaturas/:sigla/:seccion';
    const [bodyClass, setBodyClass] = useState('body-docente');
    const [asignaturas, setAsignaturas] = useState([]);
    const [registrosAsignatura, setRegistrosAsignatura] = useState([]);
    const { sigla } = useParams();
    const { seccion } = useParams();
    const [ idInfo, setIdInfo] = useState([]);
    const [estudiantes, setEstudiantes] = useState([]);
    const [fechaBusqueda, setFechaBusqueda] = useState('');
    const [registrosOriginales, setRegistrosOriginales] = useState([]);
    useEffect(() => {
        axios.get('http://134.122.112.248/api/estudiante/')
            .then(response => {
                setEstudiantes(response.data.estudiantes);
                
            })
            .catch(error => {
                console.error('Hubo un error al obtener los estudiantes:', error);
            });
    }, []);
    // Esta función se encarga de obtener los datos de la API
    const obtenerDatos = () => {
        // Asume que rut_profesor está almacenado en localStorage
        const rut_profesor = localStorage.getItem('rut');

        // Realiza una solicitud GET a tu API
        axios.get(`http://134.122.112.248/api/docente-asignatura/?rut=${rut_profesor}&sigla_asignatura=${sigla}`)
            .then(response => {
                // Guarda los datos de la respuesta en el estado
                const asignaturasArray = response.data.registros_docente_asignaturas;
                setAsignaturas(asignaturasArray);

                // Realiza la segunda solicitud
                return axios.get(`http://134.122.112.248/api/asignaturas/?sigla_asignatura=${sigla}&seccion=${seccion}`);
            })
            .then(response => {
                // Guarda los datos de la respuesta en el estado
                setIdInfo(response.data[0].id);
                localStorage.setItem('id_asignatura', response.data[0].id);
                console.log(idInfo);
                // Realiza la tercera solicitud
                return axios.get(`http://134.122.112.248/api/registro-estudiante/?id_asignatura=${response.data[0].id}`);
                
            })
            .then(response => {
                // Guarda los datos de la respuesta en el estado
                setRegistrosOriginales(response.data.registros);
                setRegistrosAsignatura(response.data.registros);
                
            })
            .catch(error => {
                console.error('Hubo un error al obtener las asignaturas:', error);
            });
    }

    // Llama a obtenerDatos cuando el componente se monta
    useEffect(() => {
        obtenerDatos();
    }, []);
    const buscarPorFecha = () => {
        setRegistrosAsignatura(registrosOriginales);
        // Convierte la fecha de búsqueda al formato "DD-MM-YYYY"
        const fechaBusquedaFormateada = fechaBusqueda.split('-').reverse().join('-');
    
        const registrosFiltrados = registrosOriginales.filter(registro => {
            // Convierte la fecha de la API al formato "DD-MM-YYYY"
            const fechaApi = registro.fecha_reg.split('-').reverse().join('-');
    
            // Imprime la fecha del registro después de la conversión
            console.log('Fecha del registro:', fechaApi);
    
            return fechaApi === fechaBusquedaFormateada;
        });
    
        // Imprime la fecha de búsqueda y los registros filtrados en la consola
        console.log('Fecha de búsqueda:', fechaBusquedaFormateada);
        console.log('Registros filtrados:', registrosFiltrados);
    
        // Actualiza el estado con los registros filtrados
        setRegistrosAsignatura(registrosFiltrados);
    };
return(

    <div>
        <HeaderDocente/>
        <div class="contenedor-asignatura">
        <div class="contenedor-asignatura-left">
            <div class="bloque-asignatura">
              <h2>Secciones</h2>
            {asignaturas.map(asignatura => (
                <div class="card tarjeta">
                    <Link to={`/docente/asignaturas/${asignatura.sigla_asignatura}/${asignatura.seccion}`} key={asignatura.id}>
                    <div class="card-body">
                      <h5 class="card-title">{asignatura.seccion}</h5>
                    </div>
                    </Link>
                  </div>
                  ))}
            </div>
        </div>
        <div class="contenedor-asignatura-right">
            <div class="buscador">
                <div class="input-group mb-3 buscadorsito">
                    <input type="date" class="form-control" placeholder="Buscador" aria-label="Recipient's username" aria-describedby="button-addon2" value={fechaBusqueda} onChange={(e) => setFechaBusqueda(e.target.value)}></input>
                    <button class="btn btn-warning" type="button" id="button-addon2" onClick={buscarPorFecha}>Buscar</button>
                  </div>
                  <button class="btn btn-success botonsito" type="button" id="button-addon2" onClick={obtenerDatos}>Reiniciar tabla</button>
            </div>
            <div class="tabla-asignatura">
                <table class="table table-hover tabla-asignatura">
                    <thead>
                        <tr>
                            <th scope="col">Rut del alumno</th>
                            <th scope="col">Nombre del Alumno</th>
                            <th scope="col">Fecha Registro</th>
                            <th scope="col">Estado alumno</th>
                            <th scope="col">Generar solicitud</th>
                        </tr>
                    </thead>
                    <tbody>
                    {registrosAsignatura.map(registro => {
                        // Busca el estudiante con el uid correspondiente
                        const estudiante = estudiantes.find(est => est.uid === registro.uid);

                        return (
                            <tr key={registro.uid}>
                                <td>{estudiante ? `${estudiante.rut_al}` : 'Estudiante no encontrado'}</td>
                                <td>{estudiante ? `${estudiante.nom_al} ${estudiante.app_alumno} ${estudiante.apm_alumno}` : 'Estudiante no encontrado'}</td>
                                <td>{registro.fecha_reg}</td>
                                <td>{registro.estado_reg ? 'Presente' : 'Ausente'}</td>
                                
                                <td><Link to={`/docente/solicitud/${estudiante.rut_al}`}><button type="button" class="btn btn-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-down" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99V4Zm1 7.105 4.708-2.897L1 5.383v5.722ZM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1Z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708l-1.25 1.25Z"/>
</svg></button></Link></td>
                                
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
)
}
export default AsignaturaMostrar;