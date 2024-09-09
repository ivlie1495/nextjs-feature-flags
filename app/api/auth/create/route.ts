import { NextResponse } from 'next/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import posthogClient from '@/utils/posthog'

export const GET = async () => {
  console.log('test test test')
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log(user)

  posthogClient.identify({
    distinctId: user.id,
    properties: {
      email: user.email,
    },
  })

  return NextResponse.redirect(`${process.env.KINDE_SITE_URL}/`)
}

export const dynamic = 'force-dynamic'
