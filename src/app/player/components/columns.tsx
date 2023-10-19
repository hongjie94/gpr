"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Player, Team } from "../type";
import { DataTableColumnHeader } from "./data-table-column-header";
import { useQuery as UQ } from "@apollo/client";
import { GET_TEAM } from "../../../graphql/queries";
import { ReloadIcon } from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define columns for the data table
export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "handle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Player" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("handle")}</div>,
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("first_name")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("last_name")}</span>
        </div>
      );
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "home_team_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Team" />
    ),
    cell: ({ row }) => {
      const getTeamName = (id: string) => {
        const { data, loading } = UQ(GET_TEAM, {
          variables: { id },
        });

        const team:Team =
          data && data.team ? data.team : { name: "", acronym: "" };
        return { teamName: team.name, acronym: team.acronym, loading };
      };

      const teamId: string = row.getValue("home_team_id");
      const team = getTeamName(teamId);

      return (
        <div className="flex w-[100px] items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {team.loading ? (
                  <>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  </>
                ) : (
                <p className="hover:underline hover:underline-offset-4">{team.acronym}</p>
                )}
              </TooltipTrigger>
             { team.teamName != "None" && <TooltipContent>
                <p>
                  {team.loading ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    team.teamName
                  )}
                </p>
              </TooltipContent>}
            </Tooltip>
          </TooltipProvider>
          <span></span>
        </div>
      );
    },
    enableSorting: false,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
