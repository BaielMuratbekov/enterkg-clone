import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavFirstItem({url,children}) {
  return (
    <li className='inline '>
       <NavLink to={url} className='inline-block px-1 ' > 
        {children}
      </NavLink>
    </li>
  )
}
