"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRedeem, MdRedeem } from "react-icons/md";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then((mod)=> mod.WalletMultiButton),
  { ssr: false }
);

export function Navbar() {
  const router = useRouter();

  const handleConnectWallet = () => {
    toast.success("Please connect your wallet", {
      description: "Redirecting to wallet connection page...",
    });
    router.push("/wallet");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8FAFC] backdrop-blur shadow-lg">
      <div className="container flex h-16 items-center justify-around">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <FaPlaneDeparture color="#0EA5E9" size={25} />
            <span className="font-bold text-xl text-[#0EA5E9]">SeatMint</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/marketplace"
            className="text-sm font-medium hover:text-sky-dark transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="/howitworks"
            className="text-sm font-medium hover:text-sky-dark transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/airline-portal"
            className="text-sm font-medium hover:text-sky-dark transition-colors"
          >
            Airline Portal
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/marketplace">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <FiShoppingCart color="#0EA5E9" size={20} />
              <span className="sr-only">Marketplace</span>
            </Button>
          </Link>

          <Link href="/wallet">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <MdRedeem color="#0EA5E9" size={20} />
              <span className="sr-only">My Wallet</span>
            </Button>
          </Link>

          <WalletMultiButton style={{
            height: "35px",
            backgroundColor: "#0EA5E9",
          }}/>
        </div>
      </div>
    </header>
  );
}
