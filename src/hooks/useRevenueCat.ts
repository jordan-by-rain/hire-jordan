import { useEffect, useState, useCallback } from 'react'
import { Purchases } from '@revenuecat/purchases-js'
import type { Offering } from '@revenuecat/purchases-js'

const RC_API_KEY = 'test_bTqBtYvFKnvuUCcjxfzEunqlrBv'

interface RevenueCatState {
  isSubscribed: boolean
  isLoading: boolean
  error: string | null
  currentOffering: Offering | null
  subscribe: () => Promise<void>
}

export function useRevenueCat(): RevenueCatState {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentOffering, setCurrentOffering] = useState<Offering | null>(null)

  useEffect(() => {
    async function init() {
      try {
        const appUserId = Purchases.generateRevenueCatAnonymousAppUserId()
        Purchases.configure({ apiKey: RC_API_KEY, appUserId })

        const purchases = Purchases.getSharedInstance()
        const customerInfo = await purchases.getCustomerInfo()
        setIsSubscribed('Jordan Demo Pro' in customerInfo.entitlements.active)

        const offerings = await purchases.getOfferings()
        if (!offerings.current) {
          setError('No offerings configured in RevenueCat dashboard.')
        }
        setCurrentOffering(offerings.current ?? null)
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        console.error('RevenueCat init error:', message)
        setError(`RevenueCat init failed: ${message}`)
      } finally {
        setIsLoading(false)
      }
    }
    init()
  }, [])

  const subscribe = useCallback(async () => {
    try {
      setError(null)
      const purchases = Purchases.getSharedInstance()
      const offerings = await purchases.getOfferings()
      const offering = offerings.current
      if (!offering) {
        setError('No offerings available. Check RevenueCat dashboard configuration.')
        return
      }

      const { customerInfo } = await purchases.presentPaywall({ offering })
      setIsSubscribed('Jordan Demo Pro' in customerInfo.entitlements.active)
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      console.error('Purchase error:', message)
      setError(`Purchase failed: ${message}`)
    }
  }, [])

  return { isSubscribed, isLoading, error, currentOffering, subscribe }
}
