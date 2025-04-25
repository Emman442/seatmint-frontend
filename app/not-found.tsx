"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-5">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-[#0EA5E9] mb-4">404</h1>
          <p className="text-2xl font-medium mb-6">Page Not Found</p>
          <p className="text-neutral mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-[#0EA5E9] text-white hover:bg-sky">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
