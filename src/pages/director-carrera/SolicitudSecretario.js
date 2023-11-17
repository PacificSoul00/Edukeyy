import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../IniciarSesion.css';
import NavBarDirector from './components/NavBarDirector';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function SolicitudSecretario(){
    const location = useLocation();
    const shouldLoadCss = location.pathname === '/secretario/inicio';
    const [bodyClass, setBodyClass] = useState('body-pd height-100');
    const [alumno, setAlumno] = useState([]);
    const [solicitud, setSolicitud] = useState(null);
    const { id_solicitud } = useParams();
    const [profesor, setProfesor] = useState(null);
    const [razon, setRazon] = useState('');
    const [tipoRespuesta, setTipoRespuesta] = useState('');
    const [estudiante, setEstudiante] = useState(null);
    const [registroEstudianteAct, setRegistroEstudianteAct] = useState([]);
    const [estadoAlumno, setEstadoAlumno] = useState(true);
    useEffect(() => {
        // Carga el CSS solo si shouldLoadCss es true
        if (shouldLoadCss) {
            setBodyClass('body-pd height-100');
            document.body.className=bodyClass;
            
            // Aquí puedes hacer algo adicional después de cargar el CSS
            console.log('CSS cargado');
        }
      });
      useEffect(() => {
        axios.get(`http://134.122.112.248/api/solicitudes/buscar/${id_solicitud}/`)
            .then(response => {
                setSolicitud(response.data);
                return axios.get(`http://134.122.112.248/api/usuarios/usuario/${response.data.rut_profesor}/`);
            })
            .then(response => {
                setProfesor(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);
    const handleRadioChange = event => {
        setTipoRespuesta(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
    
        axios.post('http://134.122.112.248/api/solicitudes/', {
            id_solicitud: id_solicitud,
            razon: razon,
            tipo_respuesta: tipoRespuesta,
            tema: solicitud.tema,
            fecha_creacion: solicitud.fecha_creacion,
            rut_profesor: solicitud.rut_profesor,
            rut_alumno: solicitud.rut_alumno,
            descripcion: solicitud.descripcion
        })
        .then(response => {
            console.log(response);
            Swal.fire({
                title: '¡Éxito!',
                text: 'Tu solicitud ha sido enviada.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            console.log(solicitud.rut_alumno);
            // Aquí es donde haces la solicitud a la API para obtener los datos del estudiante
            fetch(`http://134.122.112.248/api/estudiante/rut_al/${solicitud.rut_alumno}`)
              .then(response => response.json())
              .then(data => {
                if (data.estudiantes) {
                  setEstudiante(data.estudiantes);
                }
              })
              .catch(error => console.error(error));
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un error al modificar la solicitud",
              });
            console.error('There was an error!', error);
        });
    };
    const handleChangeEstado = (event) => {
        setEstadoAlumno(event.target.value === "true");
    };
    const handleSubmit2 = event => {
        event.preventDefault();
        console.log(estudiante[0].uid);
    
        axios.get(`http://134.122.112.248/api/registro-estudiante/filtrar_registros/?uid=${estudiante[0].uid}&id_asignatura=${solicitud.id_asignatura}&fecha_reg=${solicitud.fecha_creacion}`)
            .then(response => {
                const registros = response.data.registros;
    
                if (registros.length > 0) {
                    const primerRegistro = registros[0];
                    setRegistroEstudianteAct(registros);
                    console.log(primerRegistro);
                    axios.post(`http://134.122.112.248/api/registro-estudiante/registro_estudiante/`,{
                        id_registro_estudiante : primerRegistro.id_registro_estudiante,
                        uid : primerRegistro.uid,
                        id_asignatura : primerRegistro.id_asignatura,
                        rut : primerRegistro.rut,
                        cod_aula : primerRegistro.cod_aula,
                        fecha_reg : primerRegistro.fecha_reg,
                        estado_reg : 'false'
                    })
                    .then(response => {
                        console.log('Se cambio con exito');
                        console.log(primerRegistro.id_registro_estudiante);
                    })
                    .catch(error =>{
                        console.log(error);
                    })
                } else {
                    // Manejar el caso donde no hay registros
                    console.log("No hay registros para el estudiante");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
    if (!solicitud || !profesor) {
        return <div>Cargando...</div>;
    }





      return(
        <div>
            <NavBarDirector/>
            <div className="solicitud-secretario">
                <form onSubmit={handleSubmit}>
                    <label for="formFile" class="form-label">Id Solicitud</label>
                    <input class="form-control" type="text" value={solicitud ? solicitud.id_solicitud : ''} aria-label="id_solicitud" disabled readonly></input>
                    <label for="formFile" class="form-label">Tema</label>
                    <input class="form-control" type="text" value={solicitud ? solicitud.tema : ''} aria-label="tema" disabled readonly></input>
                    <label for="formFile" class="form-label">Fecha solicitud</label>
                    <input class="form-control" type="text" value={solicitud ? solicitud.fecha_creacion : ''} aria-label="fecha_creacion" disabled readonly></input>
                    <label for="formFile" class="form-label">Profesor</label>
                    <input class="form-control" type="text" value={profesor ? `${profesor.nombre} ${profesor.apellido}` : ''} aria-label="rut_profesor" disabled readonly></input>
                    <label for="formFile" class="form-label">Rut del alumno</label>
                    <input class="form-control" type="text" value={solicitud ? solicitud.rut_alumno : ''} aria-label="rut_alumno" disabled readonly></input>
                    <label for="formFile" class="form-label">Asignatura</label>
                    <input class="form-control" type="text" value={solicitud ? solicitud.id_asignatura : ''} aria-label="id_asignatura" disabled readonly></input>
                    <label for="formFile" class="form-label">Descripcion</label>
                    <input class="form-control" type="text" value={solicitud ? solicitud.descripcion : ''} aria-label="descripcion" disabled readonly></input>
                    <label for="exampleFormControlTextarea1" class="form-label">Razon</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={razon} onChange={e => setRazon(e.target.value)} ></textarea>
                    <br></br>
                    <label for="exampleFormControlTextarea1" class="form-label">Estado de la solicitud</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="1" onChange={handleRadioChange}></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Aprobado
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="2" onChange={handleRadioChange}></input>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Rechazado
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="3" onChange={handleRadioChange}></input>
                        <label class="form-check-label" for="flexRadioDefault3">
                            Pendiente
                        </label>
                    </div>    
                    <br></br>
                    <div class="d-grid gap-2 botonenviar">
                        <button class="btn btn-success" type="submit">Enviar respuesta</button>
                    </div>
                </form>
                <br></br>
                <form onSubmit={handleSubmit2}>
                    <label for="exampleFormControlTextarea1" class="form-label">Estado del alumno</label>
                    <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault" value="true" onChange={handleChangeEstado} checked={estadoAlumno === true}></input>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Presente
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault" value="false" onChange={handleChangeEstado} checked={estadoAlumno === false}></input>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Ausente
                            </label>
                        </div> 
                        <br></br>
                        <div class="d-grid gap-2 botonenviar">
                            <button class="btn btn-success" type="submit">Enviar respuesta del estado</button>
                        </div>
                </form>
                
                
            </div>
        </div>
    )
}
export default SolicitudSecretario
