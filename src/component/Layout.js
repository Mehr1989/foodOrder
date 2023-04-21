
import React from 'react'
import Link from 'next/link'
import NavHome from './NavHome'



function Layout( {children}) {

  return (
    < >
          <NavHome />
  
      
      
        {children}

       
      
    </>
  )
}

export default Layout