import { sendWithTokenRefresh, withAuth } from "@nihongo/core/shared/lib/auth";

export const memoboardFetch = (path: string, init: RequestInit = {}): Promise<Response> => {
  const url = `${process.env.MEMOBOARD_API}${path}`;

  return sendWithTokenRefresh((token) => fetch(url, withAuth(init, token)));
};
