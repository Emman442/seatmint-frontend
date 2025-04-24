"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SeatTokenCard } from "@/components/seat-token-card";

const Marketplace = () => {
  const [sortOption, setSortOption] = useState("price-low");

  const seatTokens = [
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
    {
      id: "token4",
      flight: "B6234",
      route: "BOS → AUS",
      date: "June 10, 2025",
      seatNumber: "15D",
      seatClass: "economy" as const,
      price: 249,
      image:
        "https://img.freepik.com/free-photo/airplane-seats_1308-5011.jpg?t=st=1745510692~exp=1745514292~hmac=b711072a443fcb59689c8f0b2cbbe96fb2732938ccea9127df1d3ef0d549c9dc&w=1380",
    },
    {
      id: "token5",
      flight: "WN567",
      route: "DEN → ATL",
      date: "May 28, 2025",
      seatNumber: "4A",
      seatClass: "business" as const,
      price: 449,
      image:
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&auto=format&fit=crop",
    },
    {
      id: "token6",
      flight: "AS890",
      route: "SEA → SAN",
      date: "June 15, 2025",
      seatNumber: "10F",
      seatClass: "economy" as const,
      price: 179,
      image:
        "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&auto=format&fit=crop",
    },
    {
      id: "token7",
      flight: "AS890",
      route: "SEA → SAN",
      date: "June 15, 2025",
      seatNumber: "10F",
      seatClass: "economy" as const,
      price: 179,
      image:
        "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&auto=format&fit=crop",
    },
    {
      id: "token8",
      flight: "AS890",
      route: "SEA → SAN",
      date: "June 15, 2025",
      seatNumber: "10F",
      seatClass: "economy" as const,
      price: 179,
      image:
        "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className=" flex flex-col gap-3">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="w-[90%] mx-auto flex gap-1 flex-col">
          <h2 className="text-3xl font-bold">Marketplace</h2>
          <div className="rounded-lg bg-white grid gap-2 px-4 items-center h-28 grid-cols-5">
            <div className="flex gap-1 flex-col">
              <p className="font-semibold text-sm">Origin</p>
              <input
                type="text"
                placeholder="From"
                className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-1"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <p className="font-semibold text-sm">Destination</p>
              <input
                type="text"
                placeholder="To"
                className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-1"
              />
            </div>

            <div className="flex gap-1 flex-col">
              <p className="font-semibold text-sm">Date</p>
              <input
                type="Date"
                placeholder="From"
                className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-1"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <p className="font-semibold text-sm">Class</p>
              <select className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-2">
                <option>Economic</option>
                <option>Business</option>
                <option>First</option>
              </select>
            </div>
            <div className="flex gap-1 flex-col ">
              <p className="font-semibold text-sm">&nbsp;</p>{" "}
              <div className="flex gap-2">
                <button className="px-8 bg-[#0EA5E9] h-9 rounded-md text-sm text-white">
                  Search
                </button>
                <button className="px-5 h-9 rounded-md bg-[#F8FAFC]">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Sort filter */}

        <div className="w-[90%] mt-10 my-2 mx-auto flex justify-between">
          <p>{seatTokens.length} Tokens seats Available</p>
          <div className="flex gap-2 items-center">
            <p className="font-semibold whitespace-nowrap">Sort by:</p>
            <select
              name=""
              id=""
              className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-1"
            >
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="">Time: Soonest</option>
              <option value="">Time: Furthest</option>
            </select>
          </div>
        </div>

        {/* Empty Seats  */}
        <div className=" flex flex-wrap gap-3 mx-auto w-[90%] ">
          {seatTokens.map((token) => (
            <div key={token.id} className="w-[24%] mt-4">
              <SeatTokenCard
                id={token.id}
                flight={token.flight}
                route={token.route}
                date={token.date}
                seatNumber={token.seatNumber}
                seatClass={token.seatClass}
                price={token.price}
                image={token.image}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
