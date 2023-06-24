import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";

interface Options {
  required: boolean;
}

export const getServerAuthStatus = async (options?: Options) => {
  const session = await getServerSession(authOptions);

  if (!session && options?.required) {
    redirect("/");
  }

  return session;
};
