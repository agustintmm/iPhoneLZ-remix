import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

function Post({post}) {
    const { title, image, created, id } = post
    return (
        <div className="post">
            <Link to={`/posts/${id}`} className="contenedor-imagen">
                <img className="imagen-post" src={image} alt={`Imagen del post '${title}'`} />
            </Link>
            <div className="informacion-post">
                <h2 className="titulo-post">{title}</h2>
                <p className="fecha-subido">Subido: {formatearFecha(created)}</p>
                <Link to={`/posts/${id}`} className="boton boton-posts">Ver articulo</Link>
            </div>
        </div>
    )
}

export default Post