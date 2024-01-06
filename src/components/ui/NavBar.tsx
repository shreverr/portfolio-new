import { navLink } from '@/types/navlinks'
import { FC } from 'react'
import NavButton from './NavButton'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  const navLinks: navLink[] = [
    {
      name: 'HOME',
      href: '#'
    },
    {
      name: 'ABOUT ME',
      href: '#about'
    },
    {
      name: 'CONTACT',
      href: '#contact'
    },
    {
      name: 'WORK',
      href: '#work'
    },
    {
      name: 'CONNECT',
      href: '#connect'
    }
  ]
  return (
    <div className='fixed bg-dark-nav-bg rounded-full mt-10 z-50 p-1 left-1/2 -translate-x-1/2'>
      <div className='flex items-center'>
        {
          navLinks.map((link, index) => {
            return (
              <NavButton name={link.name} href={link.href} key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default NavBar
