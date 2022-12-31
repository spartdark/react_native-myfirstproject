interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion

}
interface Direccion {
    pais: string,
    casaNo: number
    //las interfaces solo sirven para agregar validaciones a los objetos
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
nombreCompleto:'Saldivar',
edad: 10,
direccion: {
    pais: 'canada',
    casaNo: 615
}
    }
  return (
    <div>
<h1>Objetos literales</h1>
<code>

</code>
    </div>
  )
}
