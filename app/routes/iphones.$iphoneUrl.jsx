import { useLoaderData } from '@remix-run/react'
import { getIphone } from '../models/iphones.server'
import styles from '~/styles/iphone.css'
import { Link } from '@remix-run/react'

export async function loader({request, params}){
    const { iphoneUrl } = params

    const iphone = await getIphone(iphoneUrl)

    // Si no se encuentra el dispositivo, lanzamos un error
    if(iphone.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Articulo no encontrado'
        })
    }

    return iphone
}

export function meta({data}){

    if (!data || !data.data || data.data.length === 0) {
        return [
          {
            title: "iPhoneLZ - iPhone no encontrado",
          },
        ];
      }


    return (
          [{
              title: `iPhoneLZ - ${data.data[0].attributes.name}`,
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


function Iphone() {
    const iphone = useLoaderData()
    const { name, description, imagen, price } = iphone.data[0].attributes
    const imageUrl = imagen.data.attributes.url
    return (
        <main className='contenedor-dispositivo'>
            <div className='info-producto'>
                <h2 className='heading'>{name}</h2>
                <img className="imagen" src={imageUrl} alt={`Imagen del ${name}`} />
            </div>
            <div className='descripcion-producto'>
                <p>{description}</p>
                <p className='price'>${price}</p>
                <div className='botones'>
                    <Link className='boton'>Comprar</Link>
                    <Link className='boton'>Agregar al carrito</Link>
                </div>    
            </div>
        </main>
    )
}

export default Iphone