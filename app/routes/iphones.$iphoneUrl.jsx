import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
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
    const {agregarCarrito} = useOutletContext()
    const [ cantidad, setCantidad ] = useState(0)

    const iphone = useLoaderData()
    const { name, description, imagen, price } = iphone.data[0].attributes
    const imageUrl = imagen.data.attributes.url

    const handleSubmit = e => {
      e.preventDefault()

      if(cantidad < 1){
        alert("Debes seleccionar una cantidad")
        return 
      }
      
      const productoSeleccionado = {
        id: iphone.data[0].id,
        image: imagen.data.attributes.url,
        price,
        name, 
        cantidad
      } 

      agregarCarrito(productoSeleccionado)
    }

    return (
        <main className='contenedor-dispositivo'>
            <div className='info-producto'>
                <h2 className='heading'>{name}</h2>
                <img className="imagen" src={imageUrl} alt={`Imagen del ${name}`} />
            </div>
            <div className='descripcion-producto'>
                <p>{description}</p>
                <p className='price'>${price}</p>
                <form onSubmit={handleSubmit} className='formulario'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <select 
                      name="cantidad" 
                      id="cantidad"
                      onChange={ e => setCantidad(parseInt(e.target.value))}
                    
                    >
                      <option value="0">Seleccionar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <input 
                      className='boton'
                      type='submit'
                      value="Agregar al carrito"
                    />
                </form>    
            </div>
        </main>
    )
}

export default Iphone