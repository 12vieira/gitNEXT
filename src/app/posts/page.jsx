import React from 'react'
import Link from "next/link";

const PostPage = () => {
    const postsId = [1,2,3];
  return (
    <div>
        {/* <div className='text-right text-amber-300 m-5' >
            <Link href="/" >Home</Link>
        </div> */}
      <h1 className="text-center border border-purple-600 p-3 text-fuchsia-700 text-4x1 mt-10">Página de Posts</h1>
      <ul className='text-fuchsia-600 m-5' >
        {postsId.map((id)=>(
            <li key={id}>
                <Link href={`/posts/${id}`} >Ver os posts {id}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostPage
