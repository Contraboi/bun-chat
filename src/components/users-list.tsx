import { FC } from "hono/dist/types/jsx";
import { Avatar, StatusIndicator } from "./avatar";

export const UsersList: FC = (props) => {
  return (
    <aside class={"bg-slate-200 w-1/3"}>
      <div class={"bg-slate-300 border-b-2 p-4 h-20 grid place-items-center"}>
        <input class={"rounded-full w-full  placeholder:text-xs py-1 px-4"} placeholder={"Search"} />
      </div>
      <User lastMessage={"Nois"} name={"Selmir Nedzibi"} date={new Date()} status={"online"} />
      <User lastMessage={"Nois"} name={"Selmir Nedzibi"} date={new Date()} status={"online"} />
      <User lastMessage={"Nois"} name={"Selmir Nedzibi"} date={new Date()} status={"offline"} />
      <User lastMessage={"Nois"} name={"Selmir Nedzibi"} date={new Date()} status={"offline"} />
    </aside>
  );
};

type RecentMessageProps = {
  name: `${string} ${string}`;
  lastMessage: string;
  date: Date;
  status: "online" | "offline";
};
const User: FC<RecentMessageProps> = (props) => {
  return (
    <div class={"flex items-center p-4 border-b border-b-slate-300 mx-4"}>
      <div class={"relative w-10 h-10"}>
        <Avatar image={"https://picsum.photos/200"} />
        <StatusIndicator status={props.status} absolute />
      </div>
      <div class={"ml-4 w-full"}>
        <div class={"flex gap-4 justify-between w-full"}>
          <p class={"text-sm font-semibold"}>{props.name}</p>
          <span class={"text-xs opacity-50"}>
            {props.date.getHours()}:{props.date.getMinutes()}
          </span>
        </div>
        <p class={"text-xs text-slate-500"}>{props.lastMessage}</p>
      </div>
    </div>
  );
};
