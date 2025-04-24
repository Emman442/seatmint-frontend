import Link from "next/link";

export function Footer() {
  return (
    <footer className=" w-full py-5  px-8 bottom-0 border-gray-500/10 shadow-lg border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} SeatMint. All rights reserved. {" "}
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:underline"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
    
  );
}
