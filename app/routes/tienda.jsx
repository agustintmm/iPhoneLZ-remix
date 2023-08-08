import { getIphones } from '~/models/iphones.server.js'
import { useLoaderData } from '@remix-run/react'
import Dispositivo from '../components/Dispositivo'
import styles from '~/styles/tienda.css'

export function meta(){

    
  return (
        [{
            title: 'iPhoneLZ - Tienda',
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


export async function loader(){
  const iphones = await getIphones()
  console.log(iphones)
  return iphones
}

function Tienda() {
    const iphones = useLoaderData()
    return (
      <main className='contenedor-dispositivos'>
          <h2 className='heading'>Nuestra colección</h2>
          {iphones?.length && (
            <div className='contenedor-iphones'>
              {iphones?.map( iphone => (
                  <Dispositivo
                    key={iphone?.id}
                    iphone={iphone}
                  />
              ))}
            </div>
          )}
      </main>

    )
}

export default Tienda