import React from 'react'
import Link from 'next/link'

const PostsPage = ({params}) => {
  return (
    <div>
      {/* <div className='text-right text-amber-300 m-5' >
            <Link href="/" >Home</Link>
        </div> */}
      <h1 className="text-center border border-purple-600 p-3 text-fuchsia-700 text-4x1 mt-10">PostPage</h1>
      <p className='text-2x1 text-red-500'>Post Id: {params.id}</p>
    </div>
  )
}

export default PostsPage
