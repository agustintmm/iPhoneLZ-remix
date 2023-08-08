export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?format=json`);
    const resultado = await respuesta.json()
    return resultado
}

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts/${url}?format=json`);
    const resultado = await respuesta.json()
    return resultado
}