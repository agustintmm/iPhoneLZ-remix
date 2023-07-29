import { Link } from "@remix-run/react"

function Dispositivo({iphone}) {
    const { name, description, imagen, price, url } = iphone
    return (
        <div className="producto">
            <Link className="enlace-producto" to={`/iphones/${url}`}>
            <img className="imagen-producto" src={imagen.data.attributes.url} alt="Imagen del dispositivo" />
            </Link>
            <div className="info-producto">
                <h3>{name}</h3>
                <p className="descripcion">{description}</p>
                <p className="precio-mobile">${price}</p>
            </div>
            <p className="precio">${price}</p>
            <Link to={`/iphones/${url}`} className="boton boton-producto">Comprar</Link>
        </div>
    )
}

export default Dispositivo