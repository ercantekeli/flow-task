import React from "react";
import { RxDashboard } from "react-icons/rx";
import Button from "../Button";

import IconButton from "../IconButton";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-8 border-b border-border">
      <div className="flex items-center gap-2.5">
        <IconButton className="w-12 h-12" isActive>
          <RxDashboard />
        </IconButton>
        <span className="text-2xl font-bold">
          Flow<span className="text-primary">Task</span>
        </span>
      </div>
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
        <Button name="Log In" style="white" className="font-medium" />
        <Button
          name="Get Started Free"
          style="purple"
          className="font-medium"
        />
      </div>
    </nav>
  );
}

export default Navbar;
