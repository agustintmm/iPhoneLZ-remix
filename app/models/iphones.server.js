
export async function getIphones(){
    
    const respuesta = await fetch(`${process.env.API_URL}/productos/?format=json`);
    const resultado = await respuesta.json()
    return resultado
    
    
}

export async function getIphone(id){
    const respuesta = await fetch(`${process.env.API_URL}/productos/${id}?format=json`)
    const resultado = await respuesta.json()
    return resultado
}
