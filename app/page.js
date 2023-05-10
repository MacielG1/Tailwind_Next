import MainSection from "@/components/MainSection";
import Features from "@/components/Features";
import BlogSection from "@/components/BlogSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <MainSection />
      <Features />
      <BlogSection />

      <ScrollToTopButton />
    </>
  );
}
