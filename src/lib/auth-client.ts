import { createAuthClient } from "better-auth/client"
import { customSessionClient, genericOAuthClient } from "better-auth/client/plugins"
import type { auth } from "./auth"

// Use window.location.origin in the browser to get the current URL
const baseURL = typeof window !== 'undefined'
  ? window.location.origin
  : "http://localhost:4321"

export const authClient = createAuthClient({
  plugins: [
    genericOAuthClient(),
    customSessionClient<typeof auth>()
  ],
  baseURL
})
