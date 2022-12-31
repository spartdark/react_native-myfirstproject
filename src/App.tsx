import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Funciones } from "./typescript/Funciones";
import { TiposBasicos } from "./typescript/TiposBasicos";


 const App = () => {
  return (
    <div className='mt-2'>

<h1>Introduccion a TS - React</h1>
<hr></hr>
{/* <Funciones/> */}
<ContadorConHook/>


    </div>
  )
}


export default App;