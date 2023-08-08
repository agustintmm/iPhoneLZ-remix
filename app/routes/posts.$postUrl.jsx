import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/posts.server"
import styles from '~/styles/post.css'
import { formatearFecha } from "../utils/helpers"

export async function loader({request, params}){
    const { postUrl } = params

    const post = await getPost(postUrl)

    // Si no se encuentra el dispositivo, lanzamos un error
    if(Object.keys(post) === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Articulo no encontrado'
        })
    }

    return post
}

export function meta({data}){

    if (Object.keys(data) === 0) {
        return [
          {
            title: "iPhoneLZ - Post no encontrado",
          },
        ];
      }


    return (
          [{
              title: `iPhoneLZ - ${data.title}`,
              description: `celulares, venta de celulares, celular ${data.title}`
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
    const { content, title, image, created } = post

    return (
        <div className="container-post">
            <h1 className="heading">{title}</h1>
            <p className="contenido">{content}</p>
            <img src={image} alt={`Imagen del post ${title}`}/> 
            <p>Publicado el: {formatearFecha(created)}</p>
        </div>
    )
}

export default Post