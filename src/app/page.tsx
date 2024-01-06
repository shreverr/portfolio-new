import HeroSection from '@/components/sections/HeroSection'
import NavBar from '@/components/ui/NavBar'
import SmoothScroller from '@/components/ui/SmoothScroller'

export default function Home() {
  return (
    <main className="px-4 flex flex-col items-center min-h-screen bg-dark-background bg-grid-pattern text-white z-0">
      <div className='container'>
        <SmoothScroller />
        <NavBar />
        <div className='pt-20'>
          <HeroSection />
        </div>
      </div>
    </main>
  )
}
