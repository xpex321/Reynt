import Link from "next/link";
import { JSX, SVGProps } from "react";

export function Footer() {
  return (
    <footer className="bg-muted py-6 md:py-8 w-full">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </div>
        <p className="text-xs text-muted-foreground">&copy; 2024 Reynt Inc. All rights reserved. Developed by {["Pexari Consulting"].map((link) => (
          <Link key={link} href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>{link}</Link>))}</p>
        <nav className="flex gap-4 sm:gap-6">
          {["Terms of Service", "Privacy Policy", "Support"].map((link) => (
            <Link key={link} href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
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

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
