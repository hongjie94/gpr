import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Loader from "@/components/ui/loader";
import { Separator } from "@/components/ui/separator";

const SkeletonLoader = () => {
  return (
    <div className="container my-24 min-h-screen">
      <div className="flex items-center mb-24">
        <Skeleton className="w-[350px] flex p-4">
          <Skeleton className="h-[120px] w-[100px] flex justify-center items-center mr-6">
          </Skeleton>
          <div>
            <Skeleton className="mb-2 h-[40px] w-[120px]" />
            <Skeleton className=" h-[25px] w-[200px] my-4" />
            <Skeleton className=" h-[25px] w-[200px]" />
          </div>
        </Skeleton>
      </div>
      <Separator />
      <h1 className="text-3xl font-semibold text-center my-8">Tournaments</h1>
      <div className="p-12 w-100 flex items-center justify-center">
        <Loader /> <h1 className="mx-2">Loading ...</h1>
      </div>
    </div>
  );
};

export default SkeletonLoader;
