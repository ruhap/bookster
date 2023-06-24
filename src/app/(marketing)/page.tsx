import { SignInButton, SignOutButton } from "@/components/auth-buttons";
import { getServerAuthStatus } from "@/lib/session";

const HomePage = async () => {
  const session = await getServerAuthStatus();
  return (
    <main className="">
      {session ? <p>Hello {session.user.name}</p> : <p>Not logged in</p>}
      {session ? <SignOutButton /> : <SignInButton />}
    </main>
  );
};

export default HomePage;
