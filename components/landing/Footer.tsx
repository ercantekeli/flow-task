import React from "react";
import { RxDashboard } from "react-icons/rx";
import Button from "../Button";

import IconButton from "../IconButton";
import Link from "next/link";

function Footer() {
  return (
    <footer className="grid grid-cols-3 border-t border-border fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="flex flex-col items-center gap-1 border-r border-border px-16 py-8">
        <div className="text-4xl font-bold tracking-tighter">
          10<span className="text-primary text">k+</span>
        </div>
        <p className="text-xs text-text-muted ">Active users</p>
      </div>
      <div className="flex flex-col items-center gap-1 border-r border-border px-16 py-8">
        <div className="text-4xl font-bold tracking-tighter">
          98<span className="text-primary text">%</span>
        </div>
        <p className="text-xs text-text-muted ">Satisfaction rate</p>
      </div>
      <div className="flex flex-col items-center gap-1 px-16 py-8">
        <div className="text-4xl font-bold tracking-tighter">
          2<span className="text-primary text">x</span>
        </div>
        <p className="text-xs text-text-muted ">Faster task completion</p>
      </div>
    </footer>
  );
}

export default Footer;
