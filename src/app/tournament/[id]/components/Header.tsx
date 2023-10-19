import { ImageSwitcher } from "@/components/ui/image-switcher";
import { League } from "@/app/league/type";
import { GET_LEAGUE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { HeaderComponent } from "../../type";
import { formatText } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const Header: HeaderComponent = ({ tournament }) => {
  const id = tournament.leagueId;
  const { data, loading } = useQuery(GET_LEAGUE, {
    variables: { id },
  });

  if (loading) {
    return (
      <>
        <Skeleton className=" flex bg-zinc-100 dark:bg-stone-950 w-fit flex-col p-4 mb-4">
          <div className="flex items-center">
            <Skeleton className="h-[90px] w-[80px]" />
            <div className="ml-7 space-y-3 flex flex-col justify-end h-[90px]">
              <Skeleton className="h-[25px] w-[90px] ml-1 " />
              <Skeleton className="h-[25px] w-[150px] ml-1" />
            </div>
          </div>
          <Skeleton className="h-[30px] w-[300px] mt-4" />
        </Skeleton>
      </>
    );
  }

  const league: League = data.league;

  return (
    <>
      <div className="items-center mb-8">
        {league && (
          <div className="flex items-end">
            <ImageSwitcher
              width={100}
              height={100}
              style="p-0"
              data={league}
            />
            <div className="pb-2">
              <p className="text-lg font-bold mt-2">{data.league.name}</p>
              <p className="text-stone-500 dark:text-stone-400 text-lg">
                {data.league.region}
              </p>
            </div>
          </div>
        )}
        <h1 className="dark:text-[#C0A377] text-4xl font-bold pl-2 mt-2">
          {formatText(tournament.name)}
        </h1>
      </div>
    </>
  );
};

export default Header;
