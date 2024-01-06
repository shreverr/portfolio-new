import AboutSection from '@/components/sections/AboutSection'
import ConnectSection from '@/components/sections/ConnectSection'
import ContactSection from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSection'
import WorkSection from '@/components/sections/WorkSection'
import NavBar from '@/components/ui/NavBar'
import SmoothScroller from '@/components/ui/SmoothScroller'

export default function Home() {
  return (
    <>
      <SmoothScroller />
      <NavBar />
      <main className="px-4 flex flex-col items-center min-h-screen w-fit bg-dark-background bg-grid-pattern 
      text-white z-0 overflow-y-hidden">
        <div className='pt-20 flex w-full h-full'>
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
