import { Skeleton } from "@/components/ui/skeleton";

const LeagueListLoader = () => {
  return (
    <>
      {Array.from({ length: 16 }, (_, i) => i + 1).map((id) => (
        <Skeleton key={id} className="col-span-4 xl:col-span-1 md:col-span-2">
          <Skeleton className="h-[140px] flex items-center  p-2  bg-zinc-100  dark:bg-stone-950">
            <Skeleton className="h-[90px] w-[80px] ml-2 p-4" />
            <div className="ml-7 space-y-2">
              <Skeleton className="h-[25px] w-[70px] ml-2" />
              <Skeleton className="h-[25px] w-[150px] ml-2" />
              <Skeleton className="h-[25px] w-[150px] ml-2" />
            </div>
          </Skeleton>
        </Skeleton>
      ))}
    </>
  );
};

export default LeagueListLoader;
