import React from 'react'
import Link from 'next/link'

const ProductPage = ({params}) => {
    const produto = params.produto;
  return (
    <div>
      <h1 className='text-emerald-700'>Vendo produto: {produto}</h1>
    </div>
  )
}

export default ProductPage
