import {Routes, Route} from 'react-router-dom'
import IniciarSesion from './IniciarSesion';

function Indice(){
    return(
        <div className='Indice'>
            <Routes>
                <Route path="/" element={<IniciarSesion/>}/>
            </Routes>
        </div>
    )
}
export default Indice