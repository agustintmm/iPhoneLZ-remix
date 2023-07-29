import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/posts.server"
import styles from '~/styles/post.css'
import { formatearFecha } from "../utils/helpers"

export async function loader({request, params}){
    const { postUrl } = params

    const post = await getPost(postUrl)

    // Si no se encuentra el dispositivo, lanzamos un error
    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Articulo no encontrado'
        })
    }

    return post
}

export function meta({data}){

    if (!data || !data.data || data.data.length === 0) {
        return [
          {
            title: "iPhoneLZ - Post no encontrado",
          },
        ];
      }


    return (
          [{
              title: `iPhoneLZ - ${data.data[0].attributes.title}`,
              description: `celulares, venta de celulares, celular ${data.data[0].attributes.name}`
          }]
      )
  }
  
  export function links(){
    return [
      {
        rel:'stylesheet',
        href:styles
      }
    ]
  }


function Post() {
    const post = useLoaderData()
    const { content, title, imagen, publishedAt } = post.data[0].attributes
    const imagenUrl = imagen.data.attributes.url

    return (
        <div className="container-post">
            <h1 className="heading">{title}</h1>
            <p className="contenido">{content}</p>
            <img src={imagenUrl} alt={`Imagen del post ${title}`}/> 
            <p>Publicado el: {formatearFecha(publishedAt)}</p>
        </div>
    )
}

export default Post