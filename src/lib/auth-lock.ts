import { auth } from "./auth";

export async function isAuthLocked(authLock: string, headers: Headers){
  if (!authLock) return false;
  if (authLock === '') return false;

  const session = await auth.api.getSession({ headers });

  if (session?.provider === authLock) {
    return false;
  }

  return true;
}
