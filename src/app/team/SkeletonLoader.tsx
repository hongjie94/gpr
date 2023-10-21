import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
   {Array.from({ length: 15 }, (_, i) => i + 1).map((id) => (
     <Skeleton key={id} className="min-w-[246px] min-h-[355px] p-6">
     <Skeleton className="h-5 w-20 mb-2" />
     <Skeleton className="h-5 w-40 mb-2" />
     <div className="mt-4">
       {Array.from({ length: 3}, (_, i) => i + 1).map((id) => (
         <div key={id} className="flex items-center space-x-4 space-y-4">
           <Skeleton className="rounded-full h-12 w-12 " />
           <div className="space-y-2">
             <Skeleton className="h-5 w-24" />
             <Skeleton className="h-5 w-32" />
           </div>
         </div>
       ))}
     </div>
   </Skeleton>
   ))}
     
    </div>
  );
};

export default SkeletonLoader;
