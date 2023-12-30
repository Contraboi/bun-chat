import { FC } from "hono/dist/types/jsx";

export const ActionBar: FC = () => {
  return (
    <footer class={"w-full flex items-center gap-4 p-4 border-t-2 mx-6 absolute bottom-0"}>
      <textarea class={"w-full h-16 p-4 rounded-full text-slate-500"} placeholder={"Type a message..."} />
      <button class={"bg-red-500 h-10 w-10 rounded-full grid place-items-center shadow-lg"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </footer>
  );
};
