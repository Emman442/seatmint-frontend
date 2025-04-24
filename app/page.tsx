"use client";
import { SeatTokenCard } from "@/components/seat-token-card";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/components/ui/features-section";
import { HeroSection } from "@/components/ui/hero-section";
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const router = useRouter();
  const featuredTokens = [
    {
      id: "token1",
      flight: "AA123",
      route: "SFO → NYC",
      date: "May 15, 2025",
      seatNumber: "12A",
      seatClass: "business" as const,
      price: 399,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    },
    {
      id: "token2",
      flight: "UA456",
      route: "LAX → CHI",
      date: "June 3, 2025",
      seatNumber: "22C",
      seatClass: "economy" as const,
      price: 199,
      image:
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&auto=format&fit=crop",
    },
    {
      id: "token3",
      flight: "DL789",
      route: "MIA → SEA",
      date: "May 22, 2025",
      seatNumber: "1F",
      seatClass: "first" as const,
      price: 899,
      image:
        "https://img.freepik.com/free-photo/airplane-seats_1308-5011.jpg?t=st=1745510692~exp=1745514292~hmac=b711072a443fcb59689c8f0b2cbbe96fb2732938ccea9127df1d3ef0d549c9dc&w=1380",
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <section className="py-20 bg-muted mx-auto w-[90%]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Featured Seats
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Discover some of our most popular seat tokens currently available
              on the marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTokens.map((token) => (
              <SeatTokenCard key={token.id} {...token} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-sky-dark hover:bg-sky text-white"
            >
              <Link href="/marketplace">View All Seats</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white mx-auto">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to Transform Your Travel Experience?
            </h2>
            <p className="text-lg text-neutral-dark mb-8">
              Join our platform today to start buying, selling, and trading
              airline seat tokens with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0EA5E9] hover:bg-sky text-white"
              >
                <Link href="/marketplace">Browse Marketplace</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0EA5E9] text-sky-dark hover:bg-sky-light"
              >
                <Link href="/airline-portal">Airline Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
