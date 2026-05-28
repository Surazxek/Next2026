import HomeCategoryGrid from "@/components/category/HomeCategoryGrid";
import { Hero } from "@/components/hero/Hero";
import HomeProductGrid from "@/components/products/HomeProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCategoryGrid />
      <HomeProductGrid />
    </>
  );
}
