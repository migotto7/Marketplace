import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
