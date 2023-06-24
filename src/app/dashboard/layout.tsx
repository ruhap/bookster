import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
