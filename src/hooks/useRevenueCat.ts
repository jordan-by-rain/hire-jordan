import { useEffect, useState, useCallback } from 'react'
import { Purchases } from '@revenuecat/purchases-js'
import type { Offering } from '@revenuecat/purchases-js'

const RC_API_KEY = 'test_bTqBtYvFKnvuUCcjxfzEunqlrBv'

interface RevenueCatState {
  isSubscribed: boolean
  isLoading: boolean
  currentOffering: Offering | null
  subscribe: () => Promise<void>
}

export function useRevenueCat(): RevenueCatState {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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
        setCurrentOffering(offerings.current ?? null)
      } catch (error) {
        console.error('RevenueCat init error:', error)
      } finally {
        setIsLoading(false)
      }
    }
    init()
  }, [])

  const subscribe = useCallback(async () => {
    try {
      const purchases = Purchases.getSharedInstance()
      const offerings = await purchases.getOfferings()
      const offering = offerings.current
      if (!offering) return

      const { customerInfo } = await purchases.presentPaywall({ offering })
      setIsSubscribed('Jordan Demo Pro' in customerInfo.entitlements.active)
    } catch (error) {
      console.error('Purchase error:', error)
    }
  }, [])

  return { isSubscribed, isLoading, currentOffering, subscribe }
}
