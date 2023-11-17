import React, { useState, useEffect } from 'react';
import { useLocation, useParams} from 'react-router-dom';
import HeaderDocente from './components/HeaderDocente';
import '../../IniciarSesion.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function SolicitudDocente(){
    const [tema, setTema] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const { rut_alumno } = useParams();
    const rut_profesor = localStorage.getItem('rut');
    const id_asignatura = localStorage.getItem('id_asignatura');

    const [estudiante, setEstudiante] = useState([]);

    const fechaHoy = new Date();
    const dia = String(fechaHoy.getDate()).padStart(2, '0');
    const mes = String(fechaHoy.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript empiezan en 0
    const ano = fechaHoy.getFullYear();
    
    // Convierte la fecha al formato "DD/MM/YYYY"
    const fechaFormateada = `${dia}/${mes}/${ano}`;
    
    // Divide la fecha formateada en un array de [dia, mes, ano]
    const fechaArray = fechaFormateada.split('/');
    
    // Une el array en el orden [ano, mes, dia] para obtener la fecha en el formato "YYYY-MM-DD"
    const fechaApi = `${fechaArray[2]}-${fechaArray[1]}-${fechaArray[0]}`;
    
    console.log(fechaApi); // Imprime la fecha en el formato "YYYY-MM-DD"


    useEffect(() => {
        axios.get(`http://134.122.112.248/api/estudiante/?rut_al=${rut_alumno}`)
            .then(response => {
                setEstudiante(response.data.estudiantes);
                
            })
            .catch(error => {
                console.error('Hubo un error al obtener los estudiantes:', error);
            });
    }, []);
    console.log(estudiante)
    const enviarSolicitud = (event) => {
        event.preventDefault();
    
        const solicitud = {
            fecha_creacion: fechaApi,
            tema: tema,
            id_asignatura:id_asignatura,
            descripcion: descripcion,
            rut_alumno: rut_alumno,
            rut_profesor: rut_profesor,
            razon: 'No hay respuesta',
            tipo_respuesta: 3,

            // Aquí puedes agregar cualquier otro campo que necesites enviar a la API
        };
        console.log(solicitud);
        axios.post('http://134.122.112.248/api/solicitudes/', solicitud)
            .then(response => {
                console.log('Solicitud enviada:', response);
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Tu solicitud ha sido enviada.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            })
            .catch(error => {
                console.error('Hubo un error al enviar la solicitud:', error);
            });
    };
    return(
        <div className='contenedor-solicitud-docente'>
            <HeaderDocente/>
            <div className="titulo-solicitud-docente">
                <h3 className="texto-solicitud-estudiante">Crear solicitud de {estudiante.length > 0 ? `${estudiante[0].nom_al} ${estudiante[0].app_alumno} ${estudiante[0].apm_alumno}` : 'Cargando...'}</h3>
            </div>
            <div className='formulario-solicitud-docente'>
                <form onSubmit={enviarSolicitud}>
                    <div class="form-floating mb-1 formulario-solicitud-docente-input">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Cambio de asistencia" value={tema} onChange={(e) => setTema(e.target.value)}></input>
                        <label for="floatingInput">Tema</label>
                        
                    </div>
                    
                    <div class="mb-3 formulario-solicitud-docente-input">
                        <label for="exampleFormControlTextarea1" className="form-label textito">Fecha de la solicitud</label>
                        <input class="form-control" type="text" placeholder={fechaApi} aria-label="Disabled input example" disabled></input>
                        <label for="exampleFormControlTextarea1" className="form-label textito">Descripción de la solicitud</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-info" type="submit">Enviar solicitud</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default SolicitudDocente;