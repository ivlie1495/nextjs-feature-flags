'use client'

import { useEffect, useState } from 'react'

interface Props {
  user: Record<string, any>
}

const Content = ({ user }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(false)

  useEffect(() => {
    const fetchFeatureFlag = async () => {
      setIsLoading(true)

      const response = await fetch('/api/feature-flag')
      const result = await response.json()

      setIsFeatureEnabled(result.data.isFeatureEnabled)
      setIsLoading(false)
    }

    fetchFeatureFlag()
  }, [])

  return (
    <>
      <div>Your email: {user.email}</div>
      {!isLoading && <div>{isFeatureEnabled ? 'New Feature' : 'Abcd'}</div>}
    </>
  )
}

export default Content
