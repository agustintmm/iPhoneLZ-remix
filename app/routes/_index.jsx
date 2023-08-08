import { Link } from "@remix-run/react"
import { getIphones } from '~/models/iphones.server.js'
import { useLoaderData } from "@remix-run/react"
import Dispositivo from "../components/Dispositivo"
import Curso from "../components/Curso"
import { getCurso } from "../models/curso.server"

export async function loader(){
  const [ iphones, curso] = await Promise.all([
    getIphones(),
    getCurso()
  ])
  

  return {iphones: iphones, curso: curso}
}



function Index() {
  const { iphones, curso } = useLoaderData()
  console.log(iphones)
  return (
    <main>
      <section id="hero">
        <div id="contenido">
          <h1 id="heading-hero">Iphone LZ</h1>
          <p>Variedad de dispositivos Apple</p>
          <Link to={"/tienda"} className="boton boton-hero">¡Compra ahora!</Link>
        </div>
      </section>
      <section id="featured-items">
        <h2>Articulos destacados</h2>
        <div id="productos">
        <Dispositivo
                    key={iphones[0].id}
                    iphone={iphones[0]}
        />
        <Dispositivo
                    key={iphones[4].id}
                    iphone={iphones[1]}
        />
        <Dispositivo
                    key={iphones[2].id}
                    iphone={iphones[2]}
        />
        </div>
      </section>
      <section id="curso">
        <Curso
          curso={curso}
        />
      </section>
      <section id="about-us">
        <h2>Acerca de nosotros</h2>
        <p>En <strong>iPhone LZ</strong>, nuestro objetivo es claro: convertirnos en la mejor tienda de electrónica en el área de Lomas de Zamora. Creemos que más simple es mejor. Es por eso que hemos hecho que sea lo más fácil posible para usted encontrar lo que está buscando. Brindamos una selección de productos incomparable, una experiencia de compra única y un servicio al cliente extraordinario. Nuestras garantías integrales, opciones de entrega personalizadas y soporte profesional aseguran la satisfacción total de nuestros clientes incluso después de completar su pedido. Póngase en contacto y visítenos hoy.</p>
 
      </section>
    </main>
  )
}

export default Index