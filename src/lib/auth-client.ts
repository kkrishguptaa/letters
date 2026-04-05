import { createAuthClient } from "better-auth/client"
import { customSessionClient, genericOAuthClient } from "better-auth/client/plugins"
import type { auth } from "./auth"

export const authClient = createAuthClient({
  plugins: [
    genericOAuthClient(),
    customSessionClient<typeof auth>()
  ],
})
