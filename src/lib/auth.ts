import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";
import { customSession } from "better-auth/plugins";
import { env } from "./env";
import { getAccountCookie } from "better-auth/cookies";

export const auth = betterAuth({
  plugins: [
    genericOAuth({
      config: [{
        providerId: "hackclub",
        clientId: env.HACKCLUB_CLIENT_ID,
        clientSecret: env.HACKCLUB_CLIENT_SECRET,
        discoveryUrl: 'https://auth.hackclub.com/.well-known/openid-configuration',
        scopes: ['openid', 'profile', 'email'],
      }]
    }),
    customSession(async ({user, session}, ctx) => {
      const account = await getAccountCookie(ctx)

      return {
        user,
        session,
        provider: account?.providerId || null,
      }
    })
  ],
});
