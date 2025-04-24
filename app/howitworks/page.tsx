"use client";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@//components/ui/card";
import { useRouter } from "next/navigation";

const HowItWorks = () => {
  const router = useRouter();
  const steps = [
    {
      title: "Airlines Tokenize Seats",
      description:
        "Airlines upload flight information and convert individual seats into unique digital tokens with embedded metadata.",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&auto=format&fit=crop",
    },
    {
      title: "Buy, Sell & Trade",
      description:
        "Users can purchase seat tokens directly, or trade them on the secondary marketplace with dynamic, market-driven pricing.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop",
    },
    {
      title: "Airline Royalties",
      description:
        "Each time a seat token is traded on the secondary market, the airline automatically receives a royalty payment.",
      image:
        "https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&auto=format&fit=crop",
    },
    {
      title: "Redeem for Standard Booking",
      description:
        "When ready to fly, travelers redeem their seat token for a standard airline PNR and e-ticket with a few simple clicks.",
      image:
        "https://images.unsplash.com/photo-1537427866374-a1d5b9e0e7c7?w=600&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      title: "For Travelers",
      items: [
        "Get the best prices through market-driven seat pricing",
        "Easily transfer or resell tickets if plans change",
        "No name change fees or complex rebooking processes",
        "Seamless redemption into standard airline bookings",
        "Complete booking flexibility without typical restrictions",
      ],
    },
    {
      title: "For Airlines",
      items: [
        "Generate new revenue through royalty fees on secondary sales",
        "Improved yield management with market-based pricing",
        "Reduce customer service costs for rebookings and changes",
        "Enhanced inventory visibility through blockchain transparency",
        "Attract tech-savvy customers with innovative offerings",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-sky">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                How Our Platform Works
              </h1>
              <p className="text-lg text-neutral-dark">
                Our platform bridges traditional airline booking systems with
                blockchain technology, creating a flexible marketplace for seat
                trading while ensuring airlines receive royalties on each
                transaction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div
                    className={
                      index % 2 === 0
                        ? "order-1 md:order-1"
                        : "order-1 md:order-2"
                    }
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-xl shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div
                    className={
                      index % 2 === 0
                        ? "order-2 md:order-2"
                        : "order-2 md:order-1"
                    }
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-sky-light flex items-center justify-center text-sky-dark font-bold mr-4">
                        {index + 1}
                      </div>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="text-neutral-dark text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">{benefit.title}</h3>
                    <ul className="space-y-4">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex">
                          <svg
                            className="h-6 w-6 text-sky-dark flex-shrink-0 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 text-left mt-12">
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    What exactly is a seat token?
                  </h3>
                  <p className="text-neutral-dark">
                    A seat token is a digital asset (NFT) that represents an
                    individual airline seat on a specific flight. It contains
                    all the metadata about the flight and seat, and can be
                    traded or redeemed for a standard booking.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    How do I redeem my seat token?
                  </h3>
                  <p className="text-neutral-dark">
                    Simply visit the Redemption Portal, select your token, enter
                    passenger details, and submit. Our system will generate a
                    standard PNR and e-ticket for your flight.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    What happens if I miss my flight?
                  </h3>
                  <p className="text-neutral-dark">
                    Standard airline rules apply once a token is redeemed.
                    However, if you haven't redeemed your token yet, you can
                    sell it on the marketplace instead of losing the entire
                    value.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Which airlines are supported?
                  </h3>
                  <p className="text-neutral-dark">
                    We're continuously adding new airlines to our platform.
                    Currently, we support major carriers including American
                    Airlines, Delta, United, and several international airlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-sky">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-neutral-dark mb-8">
                Join our platform today to start buying, selling, and trading
                airline seat tokens with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-dark hover:bg-sky text-white"
                >
                  <Link href="/marketplace">Browse Marketplace</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-sky-dark text-sky-dark hover:bg-sky-light"
                >
                  <Link href="/admin">Airline Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
