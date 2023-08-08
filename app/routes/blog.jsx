import styles from '~/styles/blog.css'
import { getPosts } from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import Post from '../components/Post'

export async function loader(){
    const posts = await getPosts()
    return posts
}

export function meta(){
    return (
        [{
            title: 'iPhoneLZ - Blog',
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

function Blog() {
    const posts = useLoaderData()
    return (
      <main className="contenedor">
        <h1 className='heading'>Nuestro Blog</h1>
        <div className="contenedor-blogs">
          {posts.map( post => (
            <Post
              key={post.id}
              post = {post}
            />
          ))}
        </div>
      </main>
    )
}

export default Blog