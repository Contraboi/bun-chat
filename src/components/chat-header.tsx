import { FC } from "hono/dist/types/jsx";
import type { FullName, Status } from "../types";
import { Avatar, StatusIndicator } from "./avatar";

type ChatHeaderProps = {
  image: string;
  name: FullName;
  status: Status;
};
export const ChatHeader: FC<ChatHeaderProps> = ({ image, name, status }) => {
  return (
    <header class={"w-full p-4 border-b-2 mx-6"}>
      <div class={"flex items-center"}>
        <Avatar image={"https://picsum.photos/seed/picsum/200/300"} />
        <div class={"ml-4"}>
          <h1 class={"text-lg font-semibold"}>{name}</h1>
          <div class={"flex relative items-center gap-1"}>
            <StatusIndicator status={status} />
            <p class={"text-xs text-slate-500 capitalize"}>{status}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
