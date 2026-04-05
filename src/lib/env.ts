import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.url(),

    HACKCLUB_CLIENT_ID: z.string(),
    HACKCLUB_CLIENT_SECRET: z.string(),

    CAISY_PROJECT_ID: z.string(),
    CAISY_API_KEY: z.string(),
  },


  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
