import { FC } from "hono/dist/types/jsx";

type AvatarProps = {
  image: string;
};

export const Avatar: FC<AvatarProps> = ({ image }) => {
  return <img class={"rounded-full w-[48px] h-[48px]"} src={image} />;
};

export const StatusIndicator: FC<{ status: "online" | "offline"; absolute?: boolean }> = ({
  status,
  absolute = false,
}) => {
  return (
    <div
      class={`rounded-full w-3 h-3 bg-slate-300 border-2 border-slate-200 bottom-0 right-0 ${
        status === "online" ? "bg-green-500" : "bg-neutral-500"
      }
      ${absolute ? "absolute" : ""}
      `}
    />
  );
};
