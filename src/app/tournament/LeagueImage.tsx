import { IconSwitcher } from "@/components/ui/image-switcher";
import { GET_LEAGUE } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@/components/ui/skeleton";
import Loader from "@/components/ui/loader";
import { FileQuestion } from "lucide-react";

const LeagueImage = ({ id }: { id: string }) => {
  const { data, loading } = useQuery(GET_LEAGUE, {
    variables: { id },
  });

  if (loading)
    return (
      <Skeleton className="min-h-[80px] mt-2 absolute top-2 right-2 p-4 flex flex-col items-end">
        <Skeleton className="h-[30px] w-[40px] mr-2 p-2 flex items-center justify-center">
          <Loader />
        </Skeleton>
        <Skeleton className="w-20 mr-2 h-[16px] mb-1 mt-2 "></Skeleton>
        <Skeleton className="w-20 h-[16px] mr-2"></Skeleton>
      </Skeleton>
    );

  return (
    <>
      {data.league ? (
        <div className="flex flex-col items-end">
          <div className="w-100">
            <IconSwitcher data={data.league} />
          </div>
          <p className="text-xs font-bold mr-2 mt-2">{data.league.name}</p>
          <p className="text-stone-500 dark:text-stone-400 text-xs mr-2">
            {data.league.region}
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-end">
            <p className="text-xs font-bold mb-2 text-stone-500 dark:text-stone-400">
              Not Found!
            </p>
            <div>
              <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center bg-slate-500">
                <FileQuestion />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LeagueImage;
