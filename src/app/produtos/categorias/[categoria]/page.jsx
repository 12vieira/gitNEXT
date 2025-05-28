import React from 'react'
import Link from 'next/link'
const CategoryPage = () => {
  return (
    <div>
      <h1 className="text-center border border-purple-600 p-3 text-fuchsia-700 text-4x1 mt-10">Conheça nossos produtos:</h1>
      <div className='text-amber-300 text-2xl'>
        <ul>
          <li>
            <Link href="/produtos/categorias/eletronicos/computador_acer_i7">Computadores</Link>
          </li>
          <li>
            <Link href="/produtos/categorias/eletronicos/celular_iphone">Celular</Link>
          </li>
          <li>
            <Link href="/produtos/categorias/eletronicos/tablet_samsung">Tablet</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CategoryPage
