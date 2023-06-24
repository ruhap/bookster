"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return <Button onClick={() => signIn("discord")}>Sign In</Button>;
};

export const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
