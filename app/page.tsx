"use client"

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-sky-dark mb-4">404</h1>
          <p className="text-2xl font-medium mb-6">Page Not Found</p>
          <p className="text-neutral mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-sky-dark hover:bg-sky">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
