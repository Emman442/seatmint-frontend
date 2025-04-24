import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface SeatTokenProps {
  id: string;
  flight: string;
  route: string;
  date: string;
  seatNumber: string;
  seatClass: "economy" | "business" | "first";
  price: number;
  image: string;
}

export function SeatTokenCard({
  id,
  flight,
  route,
  date,
  seatNumber,
  seatClass,
  price,
  image,
}: SeatTokenProps) {
  const getBadgeClass = () => {
    switch (seatClass) {
      case "economy":
        return "bg-[#D3E4FD] text-[#2EBBF4]";
      case "business":
        return "bg-[#D6BCFA] text-[#7E69B0]";
      case "first":
        return "bg-[#F1F1F1]";
      default:
        return "";
    }
  };

  const handleBuyNow = () => {
    toast.success(`Purchasing seat ${seatNumber} on flight ${flight}`, {
      description: "Please connect your wallet to complete the purchase.",
    });
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={`${flight} seat ${seatNumber}`}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={`flex items-center justify-center rounded-full px-1 py-0.5 text-xs font-semibold ${getBadgeClass()}`}>
            {seatClass.charAt(0).toUpperCase() + seatClass.slice(1)}
          </div>
        </div>
      </div>

      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{flight}</h3>
            <p className="text-sm text-neutral">{route}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral">Seat</p>
            <p className="font-bold">{seatNumber}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-neutral">{date}</p>
          <p className="font-bold text-sky-dark">${price}</p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="w-full grid grid-cols-2 gap-2">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/marketplace/${id}`}>Details</Link>
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
