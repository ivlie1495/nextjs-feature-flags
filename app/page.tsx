import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import Content from './_components/content'
import UserButton from './_components/user-button'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <main className="flex flex-col gap-6 h-full justify-center items-center p-6">
      <Content user={user} />
      <UserButton user={user} />
    </main>
  )
}
