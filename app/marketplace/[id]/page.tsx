"use client"
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TokenDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [bidAmount, setBidAmount] = useState("");

  // Mock data - in a real app, you would fetch this data based on the id
  const tokenData = {
    id: id || "token1",
    flight: "AA123",
    airline: "American Airlines",
    route: "SFO → NYC",
    departureTime: "08:30 AM",
    arrivalTime: "04:45 PM",
    date: "May 15, 2025",
    seatNumber: "12A",
    seatClass: "Business",
    price: 399,
    royaltyPercent: 5,
    originalPrice: 350,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    history: [
      {
        date: "April 10, 2025",
        event: "Minted by American Airlines",
        price: 350,
      },
      { date: "April 15, 2025", event: "Purchased by User123", price: 350 },
      { date: "April 20, 2025", event: "Listed for sale", price: 399 },
    ],
  };

  const handleBuyNow = () => {
    toast.success(
      `Purchasing seat ${tokenData.seatNumber} on flight ${tokenData.flight}`,
      {
        description: "Please connect your wallet to complete the purchase.",
      }
    );
  };

  const handlePlaceBid = () => {
    if (!bidAmount || isNaN(Number(bidAmount)) || Number(bidAmount) <= 0) {
      toast.error("Please enter a valid bid amount");
      return;
    }

    toast.success(`Bid placed: $${bidAmount}`, {
      description: `Your bid for seat ${tokenData.seatNumber} has been submitted.`,
    });
    setBidAmount("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Info */}
            <div>
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={tokenData.image}
                  alt={`${tokenData.flight} seat ${tokenData.seatNumber}`}
                  className="w-full aspect-video object-cover"
                />
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">{tokenData.flight}</h2>
                      <p className="text-neutral">{tokenData.airline}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral">Seat</p>
                      <p className="text-xl font-bold">
                        {tokenData.seatNumber}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-neutral">From/To</p>
                      <p className="font-medium">{tokenData.route}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Date</p>
                      <p className="font-medium">{tokenData.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Departure</p>
                      <p className="font-medium">{tokenData.departureTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Arrival</p>
                      <p className="font-medium">{tokenData.arrivalTime}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted rounded-md">
                    <div>
                      <p className="text-sm text-neutral">Class</p>
                      <p className="font-medium">{tokenData.seatClass}</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Royalty</p>
                      <p className="font-medium">{tokenData.royaltyPercent}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Original Price</p>
                      <p className="font-medium">${tokenData.originalPrice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Purchase Options and History */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Current Price</h3>
                    <p className="text-2xl font-bold text-[#0EA5E9]">
                      ${tokenData.price}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <Button
                      className="w-full bg-[#0EA5E9] hover:bg-sky text-white h-12 text-base"
                      onClick={handleBuyNow}
                    >
                      Buy Now
                    </Button>

                    <div className="relative">
                      <label htmlFor="bid-amount">Make an Offer</label>
                      <div className="flex mt-2">
                        <div className="flex-grow">
                          <Input
                            id="bid-amount"
                            type="number"
                            placeholder="Enter amount"
                            className="bg-[#f8fafc] border-[#0EA5E9]"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                          />
                        </div>
                        <Button
                          className="rounded-l-none bg-web3-default hover:bg-web3-dark"
                          onClick={handlePlaceBid}
                        >
                          Place Bid
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F1F5F9] rounded-md text-sm">
                    <p className="mb-2">
                      <span className="font-medium">Note:</span> When purchasing
                      this token, a {tokenData.royaltyPercent}% royalty will be
                      paid to {tokenData.airline}.
                    </p>
                    <p>
                      This seat token can be redeemed for a standard PNR and
                      e-ticket through the Redemption Portal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="rules">Fare Rules</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Token ID</h4>
                      <p className="text-sm text-neutral">{tokenData.id}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Seat Features</h4>
                      <ul className="text-sm text-neutral list-disc pl-5">
                        <li>Reclining seat with extra legroom</li>
                        <li>Premium meal service</li>
                        <li>Priority boarding</li>
                        <li>Dedicated cabin attendant</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Aircraft</h4>
                      <p className="text-sm text-neutral">
                        Boeing 787 Dreamliner
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="p-4">
                  <div className="space-y-4">
                    {tokenData.history.map((event, index) => (
                      <div
                        key={index}
                        className="flex justify-between border-b pb-2 last:border-0"
                      >
                        <div>
                          <p className="font-medium">{event.event}</p>
                          <p className="text-sm text-neutral">{event.date}</p>
                        </div>
                        <p className="font-medium">${event.price}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="rules" className="p-4">
                  <div className="space-y-4 text-sm text-neutral">
                    <p>
                      <span className="font-medium text-foreground">
                        Cancellation:
                      </span>{" "}
                      Non-refundable after purchase. Seat token can be resold on
                      marketplace.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Changes:
                      </span>{" "}
                      Name changes allowed during redemption process.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Baggage:
                      </span>{" "}
                      2 checked bags included with Business Class token.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Expiration:
                      </span>{" "}
                      Token must be redeemed at least 24 hours before departure.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TokenDetail;
