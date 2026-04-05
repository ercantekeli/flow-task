import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "../Button";
import Logo from "../Logo";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between px-16 py-8 border-b border-border fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <ul className="flex items-center gap-8 font-medium">
            <li>
              <Link href="#features" className="text-text-muted hover:text-text">
                Features
              </Link>
            </li>
            {/* <li>
            <Link href="#" className="text-text-muted hover:text-text">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="text-text-muted hover:text-text">
              About
            </Link>
          </li> */}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          name="Log In"
          style="white"
          className="font-semibold text-sm"
          onClick={() => router.push("/login")}
        />
        <Button
          name="Get Started Free"
          style="purple"
          className="font-semibold text-sm"
          onClick={() => router.push("/signup")}
        />
      </div>
    </nav>
  );
}

export default Navbar;
