"use cluent"
import { Button } from "@/components/ui/button";
import  Link  from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-visible bg-gradient-sky w-[90%] mx-auto">
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Airline Seats as
              <span className="text-[#0EA5E9]"> Tradable Digital Assets</span>
            </h1>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Buy, sell, or transfer airline seat tokens with market-driven
              pricing. Seamlessly redeem them for standard airline bookings with
              just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                <Link href="/howitworks">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative ">
            <div className="relative w-full aspect-square md:aspect-video animate-float">
              <img
                src="https://img.freepik.com/free-photo/airplane-seats_1308-5011.jpg?t=st=1745510692~exp=1745514292~hmac=b711072a443fcb59689c8f0b2cbbe96fb2732938ccea9127df1d3ef0d549c9dc&w=1380"
                alt="Airplane view"
                className="absolute w-full h-full object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-10 -right-4 bg-white rounded-2xl p-4 shadow-md w-40 md:w-56 z-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-[#0EA5E9] mr-1"></div>
                    <p className="text-xs font-medium">SFO → NYC</p>
                  </div>
                  <p className="text-xs font-bold text-web3-default">
                    Flight A123
                  </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[10px] text-neutral">Seat</p>
                    <p className="text-sm font-bold">12A</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral">Price</p>
                    <p className="text-sm font-bold">$399</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral ">Class</p>
                    <div className="text-xs bg-[#D6BCFA] text-[#7E69B0] flex items-center justify-center rounded-full px-1 py-0.5 font-semibold">
                      Business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
