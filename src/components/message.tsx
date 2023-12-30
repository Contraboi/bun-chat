import { FC } from "hono/dist/types/jsx";
import { User, UUID } from "../types";
import { Avatar } from "./avatar";

type MessageProps = {
  message: string;
  date: string;
  user: User;
  currentUserId: UUID;
};

const MyMessage: FC<MessageProps> = ({ message, date, user }) => {
  const dateFromString = new Date(date);
  return (
    <div class={"flex flex-row items-end justify-end gap-4  w-full"}>
      <div>
        <p class={"ml-4 mb-1 text-xs opacity-50"}>
          {dateFromString.getHours()}:{dateFromString.getMinutes()}
        </p>
        <p class={"text-xs text-white bg-red-500 rounded-full p-4"}>{message}</p>
      </div>
    </div>
  );
};

const OthersMessage: FC<MessageProps> = ({ message, date, user }) => {
  const dateFromString = new Date(date);

  return (
    <div class={"flex flex-row items-end gap-4  w-full"}>
      <Avatar image={user.image} />
      <div>
        <p class={"ml-4 mb-1 text-xs opacity-50"}>
          {dateFromString.getHours()}:{dateFromString.getMinutes()}
        </p>
        <p class={"text-xs text-neutral-600 bg-slate-200 rounded-full p-4"}>{message}</p>
      </div>
    </div>
  );
};

export const Message: FC<MessageProps> = (props) => {
  return (
    <div class={"flex gap-4 justify-between w-full"}>
      {props.user.id === props.currentUserId ? <MyMessage {...props} /> : <OthersMessage {...props} />}
    </div>
  );
};
