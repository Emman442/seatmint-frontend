import {
  DollarSignIcon,
  RepeatIcon,
  HandCoinsIcon,
  TicketIcon,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <TicketIcon className="h-10 w-10 text-[#0EA5E9]" />,
      title: "Tokenized Seats",
      description:
        "Each airline seat becomes a unique digital token with embedded flight metadata.",
    },
    {
      icon: <RepeatIcon className="h-10 w-10 text-[#0EA5E9]" />,
      title: "Secondary Market",
      description:
        "Buy, sell, or transfer seat tokens with real-time, market-driven pricing.",
    },
    {
      icon: <HandCoinsIcon className="h-10 w-10 text-[#0EA5E9]" />,
      title: "Airline Royalties",
      description:
        "Airlines receive a royalty fee each time their seat token is resold on the marketplace.",
    },
    {
      icon: <DollarSignIcon className="h-10 w-10 text-[#0EA5E9]" />,
      title: "Seamless Redemption",
      description:
        "Redeem your seat token into a standard airline booking (PNR and e-ticket) in seconds.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Our platform bridges traditional airline booking systems with
            blockchain technology, creating a flexible marketplace for seat
            trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-[#0EA5E9] bg-[#F8FAFC] shadow-sm transition-transform transform hover:scale-105"
            >
              <div className="mb-4 p-3 rounded-full bg-[#0EA5E9]/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
