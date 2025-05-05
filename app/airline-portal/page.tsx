"use client";
import * as anchor from "@coral-xyz/anchor";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  useCreateUser,
  createAirlineSeatToken,
} from "@/features/airline/useAirline";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Cluster, Connection, PublicKey, Keypair } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@coral-xyz/anchor";
import { getFlyswapProgramId, getFlySwapProgram } from "@/anchor/src";
import { useCluster } from "@/anchor/cluster/cluster-data-access";
import { createCollection, MPL_CORE_PROGRAM_ID } from "@metaplex-foundation/mpl-core";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { fromWeb3JsKeypair } from "@metaplex-foundation/umi-web3js-adapters";
import { useAnchorProvider } from "@/anchor/utils/solana-provider";
import { generateSigner, keypairIdentity } from "@metaplex-foundation/umi";
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters'


const Admin = () => {
  const { publicKey } = useWallet();
  const wallet = useWallet()

  const { connection } = useConnection();
  const { cluster } = useCluster();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getFlyswapProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = useMemo(
    () => getFlySwapProgram(provider, programId),
    [provider, programId]
  );


  const [isAirlineLoggedIn, setIsAirlineLoggedIn] = useState(false);
  const {
    createAirlineSeatToken: createAndMintAirlineSeatToken,
    isCreatingAirlineSeatToken,
  } = createAirlineSeatToken();
  const { loginAirlineDetails, isLoggingIn } = useCreateUser();
  const [loginForm, setLoginForm] = useState({
    airline_code: "",
    airline_password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Form Data:", loginForm);
    if (!loginForm.airline_code || !loginForm.airline_password) return;

    if (loginForm.airline_code && loginForm.airline_password) {
      loginAirlineDetails(loginForm, {
        onSuccess(data) {
          console.log("Login successful:", data);
          setIsAirlineLoggedIn(true);
          toast.success("Welcome back!");
        },
        onError(err) {
          console.log("Login failed:", err);
          toast.error("Invalid credentials. Please try again.");
        },
      });
    }
  };

  const [mintForm, setMintForm] = useState({
    flightNumber: "",
    origin: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_time: "",
    aircraft: "",
    percentage_royalty: "",
    aircraft_type: "",
    economy_seats: "",
    first_class_seats: "",
    economy_price: "",
    business_price: "",
    business_seats: "",
    first_class_price: "",
    seat: "",
  });

  const handleMintChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setMintForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleMintSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if(!publicKey) return;
    // const [seat] = PublicKey.findProgramAddressSync(
    //   [Buffer.from("seat"), publicKey.toBuffer()],
    //   program.programId
    // );


    // const umi = createUmi("https://api.devnet.solana.com").use(
    //   keypairIdentity(fromWeb3JsKeypair(wallet.payer)), //Keypair Identity
    // const umi = createUmi("https://api.devnet.solana.com").use(walletAdapterIdentity(wallet))//Wallet Adapter Identity

    // const collectionSigner = generateSigner(umi);
    // await createCollection(umi, {
    //   collection: collectionSigner,
    //   name: "Newest Collection",
    //   uri: "https://github.com/Emman442/Quiz-application-with-leaderboard-feature/blob/main/mpl.json",
    // }).sendAndConfirm(umi);

    //  const asset = web3.Keypair.generate(); // generate asset keypair

    //  const tx = await program.methods.mintSeat(
    //      1,
    //      new anchor.BN(1745791232),
    //      new anchor.BN(1745791239),
    //      new anchor.BN(1745791264),
    //      "Arik Air",
    //      "https://github.com/Emman442/Quiz-application-with-leaderboard-feature/blob/main/mpl.json"
    //    )
    //    .accounts({
    //      signer: publicKey,
    //      payer: publicKey,
    //      seat: seat,
    //      collection: collectionSigner.publicKey, // You may pass this from backend if static
    //      mplCoreProgram: MPL_CORE_PROGRAM_ID,
    //      updateAuthority: publicKey,
    //      asset: asset.publicKey,
    //      systemProgram: web3.SystemProgram.programId,
    //    })
    //    .signers([asset])
    //    .rpc();

    //  console.log("Transaction Signature:", tx);
    // toast.success(`Transaction confirmed!, ${tx}`);

     // ✅ After transaction confirmed → call backend
    createAndMintAirlineSeatToken(mintForm, {
      onSuccess() {
        toast.success("Seat Token Minted Successfully");
      },
      onError(err) {
        toast.error(err.message);
      },
    });
  };

  if (!isAirlineLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-center">
                Airline Admin Portal
              </h1>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="airlineCode">Airline Code</Label>
                  <Input
                    id="airline_code"
                    placeholder="e.g. AA, DL, UA"
                    value={loginForm.airline_code}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="airline_password"
                    type="password"
                    value={loginForm.airline_password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full text-white bg-[#0EA5E9] hover:bg-sky"
                >
                  {isLoggingIn ? "Logging In..." : "Log In"}
                </Button>

                <p className="text-center text-sm text-neutral">
                  For demo purposes, any credentials will work.
                </p>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto w-[90%]">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Airline Admin Portal</h1>
              <p className="text-neutral">
                Welcome, {loginForm.airline_code} Airlines
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsAirlineLoggedIn(false)}
            >
              Log Out
            </Button>
          </div>

          <Tabs defaultValue="mint">
            <TabsList className="grid w-full grid-cols-4 mb-8 text-xs">
              <TabsTrigger value="mint">Mint Tokens</TabsTrigger>
              <TabsTrigger value="manage">Manage Inventory</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="mint">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-6">
                    Create Seat Tokens for a Flight
                  </h2>

                  <form onSubmit={handleMintSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="flightNumber">Flight Number</Label>
                        <Input
                          id="flightNumber"
                          placeholder="e.g. AA123"
                          value={mintForm.flightNumber}
                          onChange={handleMintChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="origin">Origin</Label>
                        <Input
                          id="origin"
                          placeholder="e.g. SFO"
                          value={mintForm.origin}
                          onChange={handleMintChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                          id="destination"
                          placeholder="e.g. NYC"
                          value={mintForm.destination}
                          onChange={handleMintChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="seat">Seat</Label>
                        <Input
                          id="seat"
                          placeholder="e.g. 7A"
                          value={mintForm.seat}
                          onChange={handleMintChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="departure_date">Departure Date</Label>
                        <Input
                          id="departure_date"
                          type="date"
                          value={mintForm.departure_date}
                          onChange={handleMintChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="departure_time">Departure Time</Label>
                        <Input
                          id="departure_time"
                          type="time"
                          value={mintForm.departure_time}
                          onChange={handleMintChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="arrival_time">Arrival Time</Label>
                        <Input
                          id="arrival_time"
                          type="time"
                          value={mintForm.arrival_time}
                          onChange={handleMintChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="aircraft_type">Aircraft Type</Label>
                        <select
                          name=""
                          id="aircraft_type"
                          className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-1"
                        >
                          <option value="b787">Boeing 787</option>
                          <option value="b777">Boeing 777</option>
                          <option value="a330">Airbus A330</option>
                          <option value="a320">Airbus A320</option>
                        </select>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="font-medium mb-4">Seat Configuration</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="economy_seats">Economy Seats</Label>
                            <Input
                              id="economy_seats"
                              type="number"
                              // value={mintForm.economySeats}
                              onChange={handleMintChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="economy_price">
                              Economy Price ($)
                            </Label>
                            <Input
                              id="economy_price"
                              type="number"
                              // value={mintForm.economyPrice}
                              onChange={handleMintChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="businessSeats">
                              Business Seats
                            </Label>
                            <Input
                              id="businessSeats"
                              type="number"
                              // value={mintForm.businessSeats}
                              onChange={handleMintChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business_price">
                              Business Price ($)
                            </Label>
                            <Input
                              id="business_price"
                              type="number"
                              // value={mintForm.businessPrice}
                              onChange={handleMintChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="first_class_seats">
                              First Class Seats
                            </Label>
                            <Input
                              id="first_class_seats"
                              type="number"
                              // value={mintForm.firstClassSeats}
                              onChange={handleMintChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="first_class_proce">
                              First Class Price ($)
                            </Label>
                            <Input
                              id="first_class_price"
                              type="number"
                              // value={mintForm.firstClassPrice}
                              onChange={handleMintChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 mt-6">
                      <h3 className="font-medium mb-4">Token Settings</h3>
                      <div className="max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="percentage_royalty">
                            Royalty Percentage (%)
                          </Label>
                          <Input
                            id="percentage_royalty"
                            type="number"
                            min="0"
                            max="20"
                            // value={mintForm.royaltyPercent}
                            onChange={handleMintChange}
                          />
                          <p className="text-xs text-neutral mt-1">
                            This percentage will be paid to your airline each
                            time a seat token is resold.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 flex justify-end">
                      <Button type="submit" className="bg-[#0EA5E9] text-white" disabled={isCreatingAirlineSeatToken}>
                       {isCreatingAirlineSeatToken ?"Minting seat tokens...": "Mint Seat Tokens"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manage">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-6">
                    Manage Tokenized Inventory
                  </h2>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Recent Flights</h3>
                      <div>
                        <select className="text-sm border-[#252525]/20 border-1 focus:outline-none w-full rounded-md h-9 bg-[#F8FAFC] px-1">
                          <option value="all">All Flights</option>
                          <option value="active">Active Tokens</option>
                          <option value="sold">Sold Out</option>
                        </select>
                      </div>
                    </div>

                    <div className="border border-gray-500 rounded-md">
                      <div className="grid grid-cols-7 gap-4 p-4 border border-b-gray-400 font-medium">
                        <div>Flight</div>
                        <div>Route</div>
                        <div>Date</div>
                        <div>Total Seats</div>
                        <div>Sold</div>
                        <div>Revenue</div>
                        <div>Actions</div>
                      </div>

                      <div className="grid grid-cols-7 gap-4 p-4 border border-b-gray-400">
                        <div>AA123</div>
                        <div>SFO → NYC</div>
                        <div>May 15, 2025</div>
                        <div>130</div>
                        <div>42 (32%)</div>
                        <div>$12,450</div>
                        <div>
                          <Button
                            className="bg-[#F8FAFC] border-gray-500/30 border-[1px]"
                            size="sm"
                          >
                            View
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-4 p-4 border border-b-gray-400">
                        <div>AA456</div>
                        <div>LAX → MIA</div>
                        <div>June 1, 2025</div>
                        <div>150</div>
                        <div>76 (51%)</div>
                        <div>$19,875</div>
                        <div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-4 p-4">
                        <div>AA789</div>
                        <div>DFW → SEA</div>
                        <div>May 22, 2025</div>
                        <div>120</div>
                        <div>28 (23%)</div>
                        <div>$8,340</div>
                        <div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-6">
                    Sales & Revenue Reports
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-neutral mb-1">
                          Total Revenue
                        </p>
                        <p className="text-2xl font-bold text-[#0EA5E9]">
                          $124,750
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-neutral mb-1">
                          Royalties Earned
                        </p>
                        <p className="text-2xl font-bold text-[#0EA5E9]">
                          $4,320
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-neutral mb-1">Seats Sold</p>
                        <p className="text-2xl font-bold text-[#0EA5E9]">435</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="border-[#252525]/10 border rounded-md p-6 mb-6">
                    <h3 className="font-medium mb-4">
                      Placeholder for Revenue Chart
                    </h3>
                    <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center">
                      <p className="text-neutral">
                        Revenue Chart Visualization
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline">Download Report</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium mb-6">Account Settings</h2>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="font-medium">Royalty Settings</h3>
                      <div className="max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="defaultRoyalty">
                            Default Royalty Percentage (%)
                          </Label>
                          <Input
                            id="defaultRoyalty"
                            type="number"
                            defaultValue="5"
                          />
                          <p className="text-xs text-neutral mt-1">
                            This will be applied to all new seat tokens unless
                            specified otherwise.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Redemption Rules</h3>
                      <div className="max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="redemptionDeadline">
                            Redemption Deadline (hours before departure)
                          </Label>
                          <Input
                            id="redemptionDeadline"
                            type="number"
                            defaultValue="24"
                          />
                          <p className="text-xs text-neutral mt-1">
                            Tokens must be redeemed at least this many hours
                            before the flight.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">API Integration</h3>
                      <div className="max-w-md">
                        <div className="space-y-2">
                          <Label htmlFor="apiKey">API Key</Label>
                          <Input
                            id="apiKey"
                            value="••••••••••••••••"
                            readOnly
                          />
                          <div className="flex justify-end mt-2">
                            <Button variant="outline" size="sm">
                              Generate New Key
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-[#0EA5E9] text-white">
                        Save Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
