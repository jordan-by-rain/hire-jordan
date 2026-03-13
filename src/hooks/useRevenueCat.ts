import { useEffect, useState, useCallback } from 'react'
import { Purchases } from '@revenuecat/purchases-js'
import type { Offering } from '@revenuecat/purchases-js'

const RC_API_KEY = 'test_bTqBtYvFKnvuUCcjxfzEunqlrBv'
const OFFERING_ID = 'ofrng260c3343ad'
const ENTITLEMENT_ID = 'Jordan Demo Pro'

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
        setIsSubscribed(ENTITLEMENT_ID in customerInfo.entitlements.active)

        const offerings = await purchases.getOfferings()
        // Try specific offering ID first, fall back to current
        const offering = offerings.all[OFFERING_ID] ?? offerings.current ?? null
        if (!offering) {
          setError(`Offering "${OFFERING_ID}" not found. Available: ${Object.keys(offerings.all).join(', ') || 'none'}`)
        } else {
          console.log('Offering loaded:', offering.identifier, 'Packages:', offering.availablePackages.length)
        }
        setCurrentOffering(offering)
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
      const offering = offerings.all[OFFERING_ID] ?? offerings.current
      if (!offering) {
        setError('No offerings available. Check RevenueCat dashboard configuration.')
        return
      }

      const pkg = offering.availablePackages[0]
      if (!pkg) {
        setError('No packages available in the offering.')
        return
      }

      // Use direct purchase — triggers Stripe checkout
      console.log('Purchasing package:', pkg.identifier)
      const { customerInfo } = await purchases.purchase({ rcPackage: pkg })
      setIsSubscribed(ENTITLEMENT_ID in customerInfo.entitlements.active)
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      // User closing the checkout window is not an error
      if (message.includes('cancelled') || message.includes('canceled')) {
        console.log('Purchase cancelled by user')
        return
      }
      console.error('Purchase error:', message)
      setError(`Purchase failed: ${message}`)
    }
  }, [])

  return { isSubscribed, isLoading, error, currentOffering, subscribe }
}
