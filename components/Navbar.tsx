'use client'
import { SVGProps, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-20 px-4 md:px-6 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-gray-800" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  prefetch={false}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  prefetch={false}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                  prefetch={false}
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary ml-2">
                Create Account
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-900 focus:outline-none ml-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div ref={menuRef} className="lg:hidden absolute top-20 right-0 w-64 bg-white shadow-md">
          <nav>
            <ul className="flex flex-col items-start space-y-2 p-4">
              <li className="w-full text-left">
                <Link
                  href="/"
                  className="inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none w-full"
                  prefetch={false}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-left">
                <Link
                  href="/services"
                  className="inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none w-full"
                  prefetch={false}
                >
                  Services
                </Link>
              </li>
              <li className="w-full text-left">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none w-full"
                  prefetch={false}
                >
                  Pricing
                </Link>
              </li>
              <li className="w-full text-left">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none w-full"
                  prefetch={false}
                >
                  Support
                </Link>
              </li>
              <li className="w-full text-left">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
              </li>
              <li className="w-full text-left">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button className="inline-flex h-9 items-center justify-start rounded-md px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary w-full">
                      Create Account
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </nav>
        </div>
      )}
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
