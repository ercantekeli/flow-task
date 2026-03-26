import React from "react";
import { RxDashboard } from "react-icons/rx";

import IconButton from "../components/IconButton";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <IconButton className="w-12 h-12" isActive>
        <RxDashboard />
      </IconButton>
      <span className="text-2xl font-bold">
        Flow<span className="text-primary">Task</span>
      </span>
    </div>
  );
}

export default Logo;
