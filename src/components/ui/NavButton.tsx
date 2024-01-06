'use client'

import { navLink } from '@/types/navlinks'
import { FC, useState } from 'react'

interface NavButtonProps extends navLink {

}

const NavButton: FC<NavButtonProps> = ({ name, href }) => {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = () => {
    setIsSelected(true)
  }
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`flex items-center justify-center whitespace-nowrap text-white 
                px-10 h-full rounded-full py-1 text-md hover:text-gray-400 hover:bg-[#383838] 
                hover:font-bold transition-all duration-300 ${ isSelected ? 'bg-[#282828]' : '' }`}>
      {name}
    </a>
  )
}

export default NavButton