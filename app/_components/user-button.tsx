'use client'

import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

import { Button } from '@/components/ui/button'
import { usePostHog } from 'posthog-js/react'

interface Props {
  user: Record<string, any>
}

const UserButton = ({ user }: Props) => {
  const posthog = usePostHog()

  return (
    <>
      {user ? (
        <LogoutLink onClick={() => posthog.reset()}>
          <Button>Logout</Button>
        </LogoutLink>
      ) : (
        <LoginLink>
          <Button>Login</Button>
        </LoginLink>
      )}
    </>
  )
}

export default UserButton
