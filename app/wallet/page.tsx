"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Wallet = () => {
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  const [tokens, setTokens] = useState([
    {
      id: "token1",
      flight: "AA123",
      route: "SFO → NYC",
      date: "May 15, 2025",
      seatNumber: "12A",
      seatClass: "Business",
      price: 399,
      status: "available",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&auto=format&fit=crop",
    },
    {
      id: "token4",
      flight: "B6234",
      route: "BOS → AUS",
      date: "June 10, 2025",
      seatNumber: "15D",
      seatClass: "Economy",
      price: 249,
      status: "redeemed",
      image:
        "https://images.unsplash.com/photo-1593959734809-d6225e09ad93?w=300&auto=format&fit=crop",
    },
    {
      id: "token5",
      flight: "WN567",
      route: "DEN → ATL",
      date: "May 28, 2025",
      seatNumber: "4A",
      seatClass: "Business",
      price: 449,
      status: "listed",
      image:
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=300&auto=format&fit=crop",
    },
    {
      id: "token5",
      flight: "WN567",
      route: "DEN → ATL",
      date: "May 28, 2025",
      seatNumber: "4A",
      seatClass: "Business",
      price: 449,
      status: "listed",
      image:
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=300&auto=format&fit=crop",
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Available
          </Badge>
        );
      case "listed":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Listed for Sale
          </Badge>
        );
      case "redeemed":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Redeemed
          </Badge>
        );
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const handleConnectWallet = () => {
    setConnected(true);
    toast.success("Wallet connected successfully");
  };

  const handleDisconnectWallet = () => {
    setConnected(false);
    toast.info("Wallet disconnected");
  };

  const handleListForSale = (tokenId: string) => {
    // Update the token status
    setTokens(
      tokens.map((token) =>
        token.id === tokenId ? { ...token, status: "listed" } : token
      )
    );
    toast.success("Seat token listed for sale", {
      description: "Your seat token is now available on the marketplace.",
    });
  };

  const handleCancelSale = (tokenId: string) => {
    // Update the token status
    setTokens(
      tokens.map((token) =>
        token.id === tokenId ? { ...token, status: "available" } : token
      )
    );
    toast.success("Listing canceled", {
      description: "Your seat token has been removed from the marketplace.",
    });
  };

  const handleRedeem = (tokenId: string) => {
    // Update the token status
    setTokens(
      tokens.map((token) =>
        token.id === tokenId ? { ...token, status: "redeemed" } : token
      )
    );
    toast.success("Seat token redeemed", {
      description:
        "Your seat has been reserved. Check your email for the ticket details.",
    });
  };

  const handleViewDetails = (tokenId: string) => {
   router.push(`/marketplace/${tokenId}`);
  };

  const handleViewListing = (tokenId: string) => {
    router.push(`/marketplace/${tokenId}`);
  };

  const handleBrowseMarketplace = () => {
    router.push("/marketplace");
  };

  const handleSaveSettings = () => {
    toast.success("Settings saved successfully");
  };

  if (!connected) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center mx-auto w-[90%]">
          <div className="text-center max-w-md p-8">
            <h1 className="text-3xl font-bold mb-6">Connect Your Wallet</h1>
            <p className="text-neutral mb-8">
              Connect your wallet to view your purchased seat tokens, list them
              for sale, or redeem them for a standard airline booking.
            </p>
            <div className="flex flex-col gap-4">
              <Button
                className="bg-web3-default hover:bg-web3-dark text-white h-12"
                onClick={handleConnectWallet}
              >
                Connect with Phantom
              </Button>
              <Button
                variant="outline"
                className="h-12"
                onClick={handleConnectWallet}
              >
                Connect with Solflare
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto w-[90%]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Wallet</h1>
              <p className="text-neutral">Connected: 7XR3...F29p</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" onClick={handleDisconnectWallet}>
                Disconnect
              </Button>
            </div>
          </div>

          <Tabs defaultValue="tokens">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tokens">My Seats</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="tokens">
              {tokens.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tokens.map((token) => (
                    <Card key={token.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={token.image}
                          alt={`${token.flight} seat ${token.seatNumber}`}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          {getStatusBadge(token.status)}
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-bold">{token.flight}</h3>
                            <p className="text-sm text-neutral">
                              {token.route}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-neutral">Seat</p>
                            <p className="font-bold">{token.seatNumber}</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                          <div>
                            <p className="text-xs text-neutral">Date</p>
                            <p className="text-sm">{token.date}</p>
                          </div>
                          <div>
                            <p className="text-xs text-neutral">Class</p>
                            <p className="text-sm">{token.seatClass}</p>
                          </div>
                          <div>
                            <p className="text-xs text-neutral">Value</p>
                            <p className="font-bold text-[#0EA5E9]">
                              ${token.price}
                            </p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-4 pt-0 grid grid-cols-2 gap-2">
                        {token.status === "available" && (
                          <>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => handleListForSale(token.id)}
                            >
                              List for Sale
                            </Button>
                            <Button
                              className="w-full bg-[#0EA5E9] text-white hover:bg-sky"
                              onClick={() => handleRedeem(token.id)}
                            >
                              Redeem
                            </Button>
                          </>
                        )}

                        {token.status === "listed" && (
                          <>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => handleViewListing(token.id)}
                            >
                              View Listing
                            </Button>
                            <Button
                              variant="destructive"
                              className="w-full bg-[#EF4444] text-white"
                              onClick={() => handleCancelSale(token.id)}
                            >
                              Cancel Sale
                            </Button>
                          </>
                        )}

                        {token.status === "redeemed" && (
                          <>
                            <Button
                              variant="outline"
                              className="w-full col-span-2"
                              onClick={() => handleViewDetails(token.id)}
                            >
                              View Details
                            </Button>
                          </>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">
                    No Seat Tokens Found
                  </h3>
                  <p className="text-neutral mb-6">
                    You don't have any seat tokens in your wallet yet.
                  </p>
                  <Button
                    className="bg-[#0EA5E9] text-white hover:bg-sky"
                    onClick={handleBrowseMarketplace}
                  >
                    Browse Marketplace
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Purchased Seat Token</h3>
                        <p className="text-sm text-neutral">May 1, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-[#0EA5E9]">-$399</p>
                        <p className="text-sm text-neutral">AA123 - Seat 12A</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">
                          Listed Seat Token for Sale
                        </h3>
                        <p className="text-sm text-neutral">April 28, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Asking $449</p>
                        <p className="text-sm text-neutral">WN567 - Seat 4A</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Redeemed Seat Token</h3>
                        <p className="text-sm text-neutral">April 15, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">PNR: ABC123</p>
                        <p className="text-sm text-neutral">B6234 - Seat 15D</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          placeholder="Your email"
                          className="max-w-sm focus:outline-none "
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Display Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="currency">Default Currency</Label>
                        <select id="currency" className="p-2 border rounded focus:outline-none border-[#252525]/20">
                          <option>USD</option>
                          <option>EUR</option>
                          <option>GBP</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="bg-[#0EA5E9] text-white hover:bg-sky"
                    onClick={handleSaveSettings}
                  >
                    Save Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

    </div>
  );
};

export default Wallet;
