import imagen from '../../public/img/nosotros.jpeg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return (
        [{
            title: 'iPhoneLZ - Nosotros',
        }]
    )
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  
  return (
    <main className="contenedor nosotros">

      <h2 className="heading">Nosotros</h2>

      <div className="contenido">

        <img src={imagen} alt="Imagen ilustrativa de nosotros" />

        <div className='sobre-nosotros'>
          <p>En iPhone LZ, nuestro objetivo es claro: convertirnos en la mejor tienda de electrónica en el área de Lomas de Zamora. Creemos que más simple es mejor. Es por eso que hemos hecho que sea lo más fácil posible para usted encontrar lo que está buscando. Brindamos una selección de productos incomparable, una experiencia de compra única y un servicio al cliente extraordinario. Nuestras garantías integrales, opciones de entrega personalizadas y soporte profesional aseguran la satisfacción total de nuestros clientes incluso después de completar su pedido. Póngase en contacto y visítenos hoy.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros