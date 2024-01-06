'use client'

import AboutSection from '@/components/sections/AboutSection'
import ConnectSection from '@/components/sections/ConnectSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import WorkSection from '@/components/sections/WorkSection'
import NavBar from '@/components/ui/NavBar'
import SmoothScroller from '@/components/ui/SmoothScroller'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MutableRefObject, useEffect, useRef } from 'react'

export default function Home() {
  const sectionPin = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const mainPin = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

  /* 
  *  This is the main animation for the page.
  *  It is responsible for pinning the sections to the screen
  * and scrolling them horizontally.
  * GSAP context is used to revert the animation when the page is unmounted.
  */
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(sectionPin.current, {
        scrollTrigger: {
          trigger: mainPin.current,
          start: 'top top',
          end: () => "+=" + sectionPin.current.offsetWidth,
          pin: true,
          scrub: true,
          snap: 1/5
          // markers: true,  
        },
        x: () => -(sectionPin.current.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
      })
    });

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <SmoothScroller />
      <NavBar />
      <main ref={mainPin} className="px-4 flex flex-col items-center min-h-screen w-fit bg-dark-background bg-grid-pattern 
      text-white z-0 overflow-y-hidden">
        <div className='pt-20 flex w-full h-full justify-start' ref={sectionPin}>
          <HeroSection />
          <AboutSection />
          <ContactSection />
          <WorkSection />
          <ConnectSection />
        </div>
      </main>
    </>
  )
}
