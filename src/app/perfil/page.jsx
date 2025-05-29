import React from 'react'
import Link from 'next/link'

function PerfilPage() {
  return (
    <div>
      <h1 className='text-center border border-fuchsia-700 p-3 text-fuchsia-700 text-4x1 mt-10' >Página do perfil do usuário</h1>
      
      <div className='bg-fuchsia-700 rounded-2xl mt-10 p-5 w-80'>
        <h2>Dados do usuário:</h2>
        <ul>
            <li>Nome: Matheus</li>
            <li>Idade: 27 anos</li>
            <li>Profissão: Estudante</li>
        </ul>
      </div>


    </div>
  )
}

export default PerfilPage
