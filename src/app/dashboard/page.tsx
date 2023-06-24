import { getServerAuthStatus } from "@/lib/session";

const DashboardPage = async () => {
  const session = await getServerAuthStatus({ required: true });

  return <main className="">Hello World from Dashboard</main>;
};

export default DashboardPage;
