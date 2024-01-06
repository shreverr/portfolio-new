'use client'

import { FC, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

interface SmoothScrollerProps {

}

const SmoothScroller: FC<SmoothScrollerProps> = ({ }) => {
  useEffect(() => {
    const lenis = new Lenis()
  
    lenis.on('scroll', ScrollTrigger.update)
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
  
    gsap.ticker.lagSmoothing(0)
  }, [])

  return <></>
}

export default SmoothScroller
