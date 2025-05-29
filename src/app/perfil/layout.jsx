import React, { Children } from 'react'
import Link from 'next/link'

const PageLayout = ({children}) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <Link className='text-red-400 ml-10' href='/settings' >Atualizar dados</Link>
    </div>
  )
}

export default PageLayout
