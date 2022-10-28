import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({url,children}) {
  return (
    <li className='inline '>
       <NavLink to={url} className='inline-block text-gray-800 text-base px-3 ' > 
        {children}
      </NavLink>
    </li>
  )
}
