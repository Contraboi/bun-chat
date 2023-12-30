import { FC } from "hono/dist/types/jsx";
import { Layout } from "./layout";
import { UsersList } from "./users-list";
import { ChatHeader } from "./chat-header";
import { messages } from "../data";
import { Message } from "./message";
import { ActionBar } from "./action-bar";

export const Chat: FC = (props) => {
  return (
    <Layout>
      <div class={"flex h-screen w-full"}>
        <UsersList />
        <main class={"w-full h-full relative"}>
          <ChatHeader name={"Selmir Nedzibi"} status={"online"} image={"https://picsum.photos/seed/picsum/200/300"} />
          <div class={"mx-10 my-4"}>
            {messages.map((message) => (
              <Message
                message={message.content}
                date={message.createdAt}
                user={message.user!}
                currentUserId={"4f893564-f1c2-4ba5-b3a0-bd50a408afa1"}
              />
            ))}
          </div>
          <ActionBar />
        </main>
      </div>
    </Layout>
  );
};
