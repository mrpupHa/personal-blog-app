import Navbar from "@/components/Navbar/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="px-[16px] md:px-[120px] py-[40px] md:pt-[60px]">{children}</main>
    </div>
  );
}

export default MainLayout;
