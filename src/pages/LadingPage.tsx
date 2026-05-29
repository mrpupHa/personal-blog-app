import MainLayout from "@/layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import ArticleSection from "@/components/ArticleSectioin";

function LandingPage() {
  return (
    <MainLayout>
      <HeroSection />
      <ArticleSection />
    </MainLayout>
  );
}

export default LandingPage;
