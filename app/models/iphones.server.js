export async function getIphones(){
    const respuesta = await fetch(`${process.env.API_URL}/i-phones?populate=imagen`);
    const resultado = await respuesta.json()
    return resultado
}

export async function getIphone(url){
    const respuesta = await fetch(`${process.env.API_URL}/i-phones?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}
