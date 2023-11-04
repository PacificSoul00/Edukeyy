import axios from 'axios';

const todosEstudiantes = async (state) => {
    const peticion = await axios.get('http://localhost:8000/api/estudiante/list');
    state(peticion.data);
}
export {todosEstudiantes}