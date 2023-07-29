import { Link } from "@remix-run/react"

function Curso({curso}) {
    const {content, title, image } = curso
    const imageUrl = image.data[0].attributes.url
    console.log(imageUrl)
    return (
        <>  
            <style jsx="true">{`
                #curso {
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imageUrl});
                    background-size: cover;
                    background-position: center;
                }
            `}</style>

            <div id="contenido-curso">
                <h2>{title}</h2>
                <p id="descripcion-curso">{content}</p>
                <Link target="blank" to={"https://www.linkedin.com/in/agustín-martinez/"} className="boton" id="boton-curso">Inscribite acá</Link>
            </div>
        </>
    )
}

export default Curso

// background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imageUrl});

// background-image: linear-gradient( to right, rgb(0 0 0 / .65), rbg(0 0 0 / .7) ), url(${imageUrl});