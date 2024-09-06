import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'

import { Button } from '@/components/ui/button'

interface Props {
  user: Record<string, any>
}

const UserButton = ({ user }: Props) => {
  return (
    <>
      {user ? (
        <LogoutLink>
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
