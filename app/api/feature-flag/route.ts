import { NextRequest, NextResponse } from 'next/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import posthogClient from '@/utils/posthog'

export const GET = async (req: NextRequest) => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const isFeatureEnabled = await posthogClient.isFeatureEnabled(
    'new-text',
    user.id
  )

  return NextResponse.json({
    success: true,
    data: { isFeatureEnabled },
  })
}
