"use client"
import {format} from "date-fns";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface SeatTokenProps {
  token: {
  _id: string;
  flight_number: string;
  origin: string;
  destination: string;
  price: number;
  createdAt: string;
  date: string;
  seatNumber: string;
  seat: string;
  class: string;
  departure_date: string;
  image: string;
}
}

export function SeatTokenCard(token: SeatTokenProps) {
  console.log("token",token);
  const getBadgeClass = () => {
    switch (token.token.class) {
      case "economy":
        return "bg-[#D3E4FD] text-[#2EBBF4]";
      case "business":
        return "bg-[#D6BCFA] text-[#7E69B0]";
      case "firstclass":
        return "bg-[#F1F1F1]";
      default:
        return "";
    }
  };

  const handleBuyNow = () => {
    toast.success(`Purchasing seat ${token.token.seat} on flight ${token.token.flight_number}`, {
      description: "Please connect your wallet to complete the purchase.",
    });
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="relative">
        <img
          src={
            token.token.image ||
            "https://img.freepik.com/free-photo/airplane-seats_1308-5011.jpg?t=st=1745510692~exp=1745514292~hmac=b711072a443fcb59689c8f0b2cbbe96fb2732938ccea9127df1d3ef0d549c9dc&w=1380"
          }
          alt={`${token.token.flight_number} seat ${token.token.seat}`}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute top-3 right-3">
          <div
            className={`flex items-center justify-center rounded-full px-1 py-0.5 text-xs font-semibold ${getBadgeClass()}`}
          >
            {token.token.class.charAt(0).toUpperCase() +
              token.token.class.slice(1)}
          </div>
        </div>
      </div>

      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{token.token.flight_number}</h3>
            <p className="text-sm text-neutral">
              {token.token.origin} → {token.token.destination}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral">Seat</p>
            <p className="font-bold">{token.token.seat}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-neutral">
            {format(
              token.token.departure_date || token.token.createdAt,
              "MMMM d, yyyy"
            )}
          </p>
          <div className="flex gap-2 items-center">
            <p className=" capitalize font-semibold">price: </p>
            <p className="font-semibold text-sky-dark flex gap-1 items-center">
              <img src="/usdc.png" width={18} height={18} alt="" />
              <span>{token.token.price}</span>
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full grid grid-cols-2 gap-2">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/marketplace/${token.token._id}`}>Details</Link>
          </Button>
          <Button
            className="w-full bg-[#0EA5E9] text-white"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
