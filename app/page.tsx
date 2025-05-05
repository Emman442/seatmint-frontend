"use client"
import { SeatTokenCard } from '@/components/seat-token-card';
import { Button } from '@/components/ui/button';
import { FeaturesSection } from '@/components/ui/features-section';
import { HeroSection } from '@/components/ui/hero-section';
import { Navbar } from '@/components/ui/navbar';
import Link from 'next/link';
import React from 'react'

export default function page() {
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
        "https://images.unsplash.com/photo-1532299033990-5bf9c751c31d?w=800&auto=format&fit=crop",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />

        <section className="py-20 bg-muted">
          <div className="container mx-auto w-[90%]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Featured Seats
              </h2>
              <p className="text-neutral-dark max-w-2xl mx-auto">
                Discover some of our most popular seat tokens currently
                available on the marketplace.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTokens.map((token) => (
                <SeatTokenCard key={token.id} />
              ))}
            </div> */}

            <div className="mt-12 text-center">
              <Button className="bg-sky-dark hover:bg-sky text-white">
                <Link href="/marketplace">View All Seats</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container w-[90%] mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Ready to Transform Your Travel Experience?
              </h2>
              <p className="text-lg text-neutral-dark mb-8">
                Join our platform today to start buying, selling, and trading
                airline seat tokens with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#0EA5E9] hover:bg-sky text-white">
                  <Link href="/marketplace">Browse Marketplace</Link>
                </Button>
                <Button className="border-[#0EA5E9] border text-[#0EA5E9] px-2 hover:bg-sky-light">
                  <Link href="/admin">Airline Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
