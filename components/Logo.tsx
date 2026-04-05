import React from "react";
import { RxDashboard } from "react-icons/rx";

import IconButton from "../components/IconButton";

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <IconButton className="w-14 h-14" isActive>
        <RxDashboard className="w-8 h-8" />
      </IconButton>
      <span className="text-3xl font-bold">
        Flow<span className="text-primary">Task</span>
      </span>
    </div>
  );
}

export default Logo;
