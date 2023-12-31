import { Link } from "@remix-run/react"
import { useLocation } from "@remix-run/react"
import ImagenCarrito from "../../public/img/carrito.png"

const Navegacion = () => {
    const location = useLocation()
    return (
        <nav className="navegacion">
            <Link className={ location.pathname === '/' ? 'active link':'link'} to='/'>
                Inicio
            </Link>
            <Link className={ location.pathname === '/nosotros' ? 'active link':'link'} to='/nosotros'>
                Nosotros
            </Link>
            <Link className={ location.pathname === '/blog' ? 'active link':'link'} to='/blog'>
                Blog
            </Link>
            <Link className={ location.pathname === '/tienda' ? 'active link':'link'} to='/tienda'>
                Tienda
            </Link>
            <Link to='/carrito'>
                <img className="carrito" src={ImagenCarrito} alt="Imagen carrito de compras"></img>
            </Link>
        </nav>
  )
}

export default Navegacion