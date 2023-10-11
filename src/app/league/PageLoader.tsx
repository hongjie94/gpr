import Loader from "@/components/ui/loader";
import { Skeleton } from "@/components/ui/skeleton";

const PageLoader = () => {
  return (
    <>
      {Array.from({ length: 16 }, (_, i) => i + 1).map((id) => (
        <Skeleton key={id} className="col-span-4 xl:col-span-1 md:col-span-2">
          <Skeleton className="h-[140px] flex items-center justify-center p-2  bg-zinc-100  dark:bg-stone-950">
            <Loader />
          </Skeleton>
        </Skeleton>
      ))}
    </>
  );
};

export default PageLoader;
