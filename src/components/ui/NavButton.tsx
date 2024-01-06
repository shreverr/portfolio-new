'use client'

import type { navLink } from '@/types/navlinks'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { FC, useEffect, useState } from 'react'

interface NavButtonProps extends navLink {

}

const NavButton: FC<NavButtonProps> = ({ name, href }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  })
  
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = (event: React.SyntheticEvent) => {
    // event.preventDefault()
    setIsSelected(isSelected ? false : true)
    gsap.to(window, { duration: 1, scrollTo: href })
  }

  return (
    <a
      // href={href}
      onClick={handleClick}
      className={`flex items-center justify-center whitespace-nowrap text-white 
                px-10 h-full rounded-full py-1 text-md 
                transition-all duration-300 ${ isSelected ? 'bg-[#282828] font-black' : 'hover:font-bold' }`}>
      {name}
    </a>
  )
}

export default NavButton