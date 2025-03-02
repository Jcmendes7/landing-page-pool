
import { FAQ } from '../../components/FAQ'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { HeroSection } from '../../components/HeroSection'
import { Services } from '../../components/Services'
import './style.css'
export function Home() {
    return (
        <>
          <div className="home">
            <Header />
            <HeroSection />
            <Services />
            <FAQ />
            <Footer />
      </div>
      </>
    )
}