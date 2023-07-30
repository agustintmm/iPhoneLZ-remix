import { useEffect, useState } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function meta(){
    return (
        [{
            title: 'iPhoneLZ - Carrito',
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


function Carrito() {
  const [ total, setTotal ] = useState(0)
  const { carrito, actualizarCantidad, eliminarProducto } = useOutletContext()
  
  useEffect( () => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.price), 0)

    setTotal(calculoTotal)
  }, [carrito])


  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
      <main id='carrito'>
          <h1 className='heading'>Carrito de compras</h1>
          <div id='carrito-contenido'>
              <div id='productos'>
                  <h2>Productos</h2>
                  {carrito?.length === 0 ? 'Carrito vacio' : (
                    carrito?.map( producto => (
                      <div key={producto.id} className='producto'>
                          <div className='contenedor-imagen'><img src={producto.image} alt={`Imagen del producto ${producto.name}`} /></div>
                          <div className='info-producto'>
                            <p><strong>{producto.name}</strong></p>
                            <p>Cantidad:</p>
                            <select
                              className="cantidad" 
                              value={producto.cantidad}
                              onChange={e => actualizarCantidad({
                                cantidad: +e.target.value,
                                id: producto.id
                              })}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                            <p>Precio: <span>${producto.price}</span></p>
                            <p>Subtotal: <span>${producto.cantidad * producto.price}</span></p>
                              <button 
                                className='btn_eliminar'
                                type='button'
                                onClick={ () => eliminarProducto(producto.id) }
                              >x</button>
                          </div>
                      </div>
                    ))
                  )}
              </div>
              <div id='total-carrito'>
                  <h2>Resumen de compra</h2>
                  <p>Total a pagar: <strong>${total}</strong></p>
              </div>
          </div>
      </main>
      )}
    </ClientOnly>
    
  )
}

export default Carrito