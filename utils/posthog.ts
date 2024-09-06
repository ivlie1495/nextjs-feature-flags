import 'server-only'

import { PostHog } from 'posthog-node'

function serverSidePosthog() {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })
}

const posthogClient = serverSidePosthog()

export default posthogClient
