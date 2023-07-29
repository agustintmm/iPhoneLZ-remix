import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

function Post({post}) {
    const { title, imagen, createdAt, url } = post.attributes
    console.log(imagen)
    return (
        <div className="post">
            <Link to={`/posts/${url}`} className="contenedor-imagen">
                <img className="imagen-post" src={imagen.data.attributes.formats.small.url} alt={`Imagen del post '${title}'`} />
            </Link>
            <div className="informacion-post">
                <h2 className="titulo-post">{title}</h2>
                <p className="fecha-subido">Subido: {formatearFecha(createdAt)}</p>
                <Link to={`/posts/${url}`} className="boton boton-posts">Ver articulo</Link>
            </div>
        </div>
    )
}

export default Post