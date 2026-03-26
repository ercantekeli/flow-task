import React from "react";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "../Button";
import IconButton from "../IconButton";
import Logo from "../Logo";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between px-16 py-8 border-b border-border">
      <Logo />
      <div>
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Link href="/features" className="text-text-muted hover:text-text">
              Features
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-text-muted hover:text-text">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-text-muted hover:text-text">
              About
            </Link>
          </li>
        </ul>
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
        />
      </div>
    </nav>
  );
}

export default Navbar;
