import Navegacion from "./Navegacion"
import LogoFb from '../../public/img/logo-fb.png'
import LogoIn from '../../public/img/logo-in.png'
import LogoYt from '../../public/img/logo-yt.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <article className="navegacion-footer">
                <Navegacion/>
            </article>
            <article className="info-footer">
                <p>iPhone LZ</p>
                <p>Telefono: 11223414124</p>
                <a className="link" href="mailto: agustinmartinez2003@gmail.com" target="blank"> Envianos un mail</a>
                <p>Sitio creado por Agustin Martinez</p>
            </article>
            <article className="redes-footer">
                <a href="https://www.linkedin.com/in/agustín-martinez/" target="blank"><img className="logo-redes" src={LogoFb} alt="Logo de Facebook" /></a>
                <a href="https://www.linkedin.com/in/agustín-martinez/" target="blank"><img className="logo-redes" src={LogoIn} alt="Logo de Instagram" /></a>
                <a href="https://www.linkedin.com/in/agustín-martinez/" target="blank"><img className="logo-redes" src={LogoYt} alt="Logo de Youtube" /></a>
            </article>
        </div>
    </footer>
  )
}

export default Footer