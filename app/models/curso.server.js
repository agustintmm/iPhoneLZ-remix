export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=image`)
    const resultado = await respuesta.json()
    return resultado
}