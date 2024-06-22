import { Skeleton } from "@nextui-org/react";
import React from "react";

function SkeletonLine() {
  return (
    <div className="space-y-3 dark:bg-[#040309] p-8 rounded-lg flex flex-col">
      <Skeleton className="w-3/5 rounded-lg dark:bg-[#06050f]">
        <div className="h-3 w-full rounded-lg bg-secondary"></div>
      </Skeleton>
      <Skeleton className="w-4/5 rounded-lg dark:bg-[#06050f]">
        <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg dark:bg-[#06050f]">
        <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
      </Skeleton>
    </div>
  );
}

export default SkeletonLine;
