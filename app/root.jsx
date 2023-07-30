import { useEffect, useState } from 'react'
import { 
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload, 
    useRouteError, 
    isRouteErrorResponse, 
    Link }
    from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/Header'
import Footer from './components/Footer'

export function meta(){
    return (
        [{
            charset: 'utf-8',
            
        },
        {
            title: 'iPhoneLZ - Remix'
        },
        {
            viewport: "width=device-width,initial-scale=1"
        }]
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel:'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        
    ]
}
         
export default function App() {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    // Funciones para el Outlet Context

    const agregarCarrito = producto => {
        if(carrito.some(productoState => productoState.id === producto.id)){
            // Identificar el elemento duplicado
            const carritoActualizado = carrito.map( productoState => {
                if(productoState.id === producto.id){
                    // Reescribir la cantidad
                    productoState.cantidad = producto.cantidad
                }
                return productoState
            })
            // Actualizar el carrito
            setCarrito(carritoActualizado)
        }else{
            //Registro nuevo
            setCarrito([...carrito, producto])
        }
        
    }

    const actualizarCantidad = producto => {
        const carritoActualizado = carrito.map(productoState => {
            if(productoState.id === producto.id){
                productoState.cantidad = producto.cantidad
            }
            return productoState
        })
        setCarrito(carritoActualizado)
    }
    
    const eliminarProducto = id => {
        const carritoActualizado = carrito.filter( productoState => productoState.id !== id)
        setCarrito(carritoActualizado)
    }


    return(
        <Document>
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarProducto
                }}
            />
        </Document>
    )

}

function Document({children}){
    return (
        <html lang="es">
        <head>
            <Meta />
            <Links/>
        </head>
        <body>
            <Header/>
            <div id='contenido principal'>
                {children}
            </div>
            <Footer/>
            <Scripts/>
            <LiveReload/>
        </body>
        </html>
    )
}

// Manejo de errores

export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      return (
        <Document>
            <div className="contenedor">
            <h1 className='error'>
                Error {error.status}, {error.statusText}
            </h1>
            <Link to="/" className='boton'>Tal vez quieras volver</Link>
          </div>
          <p>{error.data}</p>
        </Document>
      );
    } else if (error instanceof Error) {
      return (
        <Document>
          <h1 className='error'>Error</h1>
          <Link to="/" className='boton'>Tal vez quieras volver</Link>x
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </Document>
      );
    } else {
      return <h1>Error desconocido</h1>;
    }
  }