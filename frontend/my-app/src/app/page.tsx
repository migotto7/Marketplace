import CategoryGrid from "@/components/categoryGrid/CategoryGrid";
import FeaturedProducts from "@/components/featuredProds/FeaturedProducts";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <Hero />
        <section className="max-w-7xl mx-auto px-4">
          <CategoryGrid />
        </section>
        <section className="max-w-7xl mx-auto px-4">
          <FeaturedProducts />
        </section>
      </main>
    </div>
  );
}
