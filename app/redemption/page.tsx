"use client";
import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

const Redemption = () => {
  const [step, setStep] = useState(1);
  const [selectedToken, setSelectedToken] = useState("");

  const mockTokens = [
    {
      id: "token1",
      flight: "AA123",
      seat: "12A",
      from: "SFO",
      to: "NYC",
      date: "May 15, 2025",
    },
    {
      id: "token5",
      flight: "WN567",
      seat: "4A",
      from: "DEN",
      to: "ATL",
      date: "May 28, 2025",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    passportNumber: "",
    nationality: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, you would submit this data to your backend
    setTimeout(() => {
      setStep(3);
      toast("Your seat token has been redeemed for a standard booking.");
    }, 1500);
  };

  const selectedTokenDetails = mockTokens.find(
    (token) => token.id === selectedToken
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Redeem Your Seat Token
          </h1>

          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-sky-dark text-white" : "bg-neutral-light"
                }`}
              >
                1
              </div>
              <div
                className={`w-20 h-1 ${
                  step >= 2 ? "bg-sky-dark" : "bg-neutral-light"
                }`}
              ></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-sky-dark text-white" : "bg-neutral-light"
                }`}
              >
                2
              </div>
              <div
                className={`w-20 h-1 ${
                  step >= 3 ? "bg-sky-dark" : "bg-neutral-light"
                }`}
              ></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-sky-dark text-white" : "bg-neutral-light"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-6">
                  Select a Seat Token to Redeem
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="token-select">Your Available Tokens</Label>
                    <Select
                      value={selectedToken}
                      onValueChange={setSelectedToken}
                    >
                      <SelectTrigger id="token-select">
                        <SelectValue placeholder="Select a token" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockTokens.map((token) => (
                          <SelectItem key={token.id} value={token.id}>
                            {token.flight} - Seat {token.seat} ({token.from} →{" "}
                            {token.to})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedToken && (
                    <div className="p-4 bg-muted rounded-md">
                      <h3 className="font-medium mb-2">
                        Selected Token Details
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-neutral">Flight</p>
                          <p className="font-medium">
                            {selectedTokenDetails?.flight}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral">Seat</p>
                          <p className="font-medium">
                            {selectedTokenDetails?.seat}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral">Route</p>
                          <p className="font-medium">
                            {selectedTokenDetails?.from} →{" "}
                            {selectedTokenDetails?.to}
                          </p>
                        </div>
                        <div>
                          <p className="text-neutral">Date</p>
                          <p className="font-medium">
                            {selectedTokenDetails?.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full bg-sky-dark hover:bg-sky"
                    disabled={!selectedToken}
                    onClick={() => setStep(2)}
                  >
                    Continue to Passenger Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-6">
                  Enter Passenger Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input
                        id="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passportNumber">Passport Number</Label>
                      <Input
                        id="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-md text-sm">
                    <p className="mb-2">
                      <span className="font-medium">Note:</span> By submitting
                      this form, you are redeeming your seat token for a
                      standard airline booking. This action cannot be undone.
                    </p>
                    <p>
                      The passenger details provided must match the traveler's
                      identification documents.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-sky-dark hover:bg-sky"
                    >
                      Redeem Token
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600"
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
                  </div>
                  <h2 className="text-xl font-medium">
                    Redemption Successful!
                  </h2>
                  <p className="text-neutral mt-2">
                    Your seat token has been successfully redeemed for a
                    standard airline booking.
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-md mb-8">
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-sm text-neutral">Passenger</p>
                      <p className="font-medium">
                        {formData.firstName} {formData.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Flight</p>
                      <p className="font-medium">
                        {selectedTokenDetails?.flight}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Route</p>
                      <p className="font-medium">
                        {selectedTokenDetails?.from} →{" "}
                        {selectedTokenDetails?.to}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Date</p>
                      <p className="font-medium">
                        {selectedTokenDetails?.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">Seat</p>
                      <p className="font-medium">
                        {selectedTokenDetails?.seat}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-neutral">PNR</p>
                      <p className="font-medium">ABCDEF</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button className="bg-sky-dark hover:bg-sky">
                    Download E-Ticket
                  </Button>
                  <Button variant="outline">Return to Wallet</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Redemption;
