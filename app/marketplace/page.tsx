"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { SeatTokenCard } from "@/components/seat-token-card";
import { fetchSeatTokens } from "@/features/airline/useAirline";

const Marketplace = () => {
  const [sortOption, setSortOption] = useState("price-low");
  const {seatTokens, isFetchingSeatTokens} = fetchSeatTokens()

  if(!seatTokens) return <div className="w-full h-screen flex justify-center items-center">Loading...</div>
  if(isFetchingSeatTokens) return <div className="w-full h-screen flex justify-center items-center">Loading...</div>
  
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
          <p> {seatTokens.data.data.seats.length} Tokens seats Available</p>
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
          {seatTokens && seatTokens.data.data.seats?.map((token: any) => (
            <div key={token._id} className="w-[24%] mt-4">
              <SeatTokenCard  token={token}      />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
