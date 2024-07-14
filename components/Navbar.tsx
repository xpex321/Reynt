import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { SVGProps } from "react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white shadow-md z-50">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="mr-6 flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex-1">
          <ul className="flex justify-center items-center space-x-4">
            <li>
              <Link
                href="/"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center space-x-2">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                Create Account
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
