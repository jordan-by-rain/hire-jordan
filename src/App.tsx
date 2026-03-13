import { useRevenueCat } from './hooks/useRevenueCat'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import SubscribedState from './components/SubscribedState'
import Footer from './components/Footer'

export default function App() {
  const { isSubscribed, isLoading, subscribe } = useRevenueCat()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-violet-500 text-xl font-display animate-pulse">
          Initializing Jordan...
        </div>
      </div>
    )
  }

  if (isSubscribed) {
    return <SubscribedState />
  }

  return (
    <main>
      <Hero onSubscribe={subscribe} />
      <Stats />
      <Capabilities />
      <HowItWorks />
      <Hero onSubscribe={subscribe} variant="cta" />
      <Footer />
    </main>
  )
}
