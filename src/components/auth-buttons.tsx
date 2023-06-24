"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignInButton = async () => {
  return <Button onClick={() => signIn("discord")}>Sign In</Button>;
};

export const SignOutButton = async () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
