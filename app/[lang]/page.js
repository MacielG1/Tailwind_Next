import MainSection from "@/components/MainSection";
import Features from "@/components/Features";
import BlogSection from "@/components/BlogSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import getDictionary from "@/utils/getDictionary";

export default async function Home({ params }) {
  const data = await getDictionary(params.lang);

  return (
    <>
      <MainSection dictionary={data} />
      <Features dictionary={data} />
      <BlogSection dictionary={data} />
      <ScrollToTopButton dictionary={data} />
    </>
  );
}
