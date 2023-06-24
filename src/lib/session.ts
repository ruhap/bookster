import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";

export const getServerAuthStatus = async () => {
  return await getServerSession(authOptions);
};
