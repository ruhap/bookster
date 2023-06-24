import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";

export async function getServerAuthStatus() {
  return await getServerSession(authOptions);
}
