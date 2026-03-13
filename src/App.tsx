import { useRevenueCat } from './hooks/useRevenueCat'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import SubscribedState from './components/SubscribedState'
import Footer from './components/Footer'

export default function App() {
  const { isSubscribed, isLoading, error, subscribe } = useRevenueCat()

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
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-3 rounded-xl text-sm max-w-lg text-center backdrop-blur-sm">
          {error}
        </div>
      )}
      <Hero onSubscribe={subscribe} />
      <Stats />
      <Capabilities />
      <HowItWorks />
      <Hero onSubscribe={subscribe} variant="cta" />
      <Footer />
    </main>
  )
}
