export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/cursos?format=json`)
    const resultado = await respuesta.json()
    return resultado
}