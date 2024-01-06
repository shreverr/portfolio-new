import { FC } from 'react'

interface SectionProps {
  children: React.ReactNode
  id: string
}

const Section: FC<SectionProps> = ({ children, id }) => {
  return (
    <section id={id} className='w-screen text-9xl p-4'>
      {children}
    </section>)
}

export default Section