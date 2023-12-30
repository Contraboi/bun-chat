import app from "./app";
import { FullName, UUID } from "./types";
import { ServerWebSocket } from "bun";
import { messages, users } from "./data";

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});

type WebSocketData = {
  username: FullName;
  id: UUID;
};

Bun.serve({
  port: 4000,
  fetch(req, server) {
    console.log("Upgrade request received");
    const success = server.upgrade(req, {
      // Set username to semi-random text, collisions probably do not use in production
      data: { username: "User " + Math.random().toString(16).slice(12), id: crypto.randomUUID() },
    });

    return success ? undefined : new Response("Upgrade failed :(", { status: 500 });
  },
  websocket: {
    open(ws: ServerWebSocket<WebSocketData>) {
      // Store username
      users.set(ws.data.id, {
        id: ws.data.id,
        name: ws.data.username,
        image: "https://picsum.photos/seed/picsum/200/300",
        status: "online",
      });

      // Subscribe to pubsub channel to send/receive broadcasted messages,
      // without this the socket could not send events to other clients
      ws.subscribe("chat");

      // Broadcast that a user joined
      ws.publish("chat", JSON.stringify({ type: "USERS_ADD", data: ws.data.username }));

      // Send message to the newly connected client containing existing users and messages
      ws.send(JSON.stringify({ type: "USERS_SET", data: users }));
      ws.send(JSON.stringify({ type: "MESSAGES_SET", data: messages }));
    },
    message(ws, data) {
      // Data sent is a string, parse to object
      const message = JSON.parse(data);
      message.username = ws.data.username;
      messages.push(message);

      // Send message to all clients subscribed to the chat channel with new message
      ws.publish("chat", JSON.stringify({ type: "MESSAGES_ADD", data: message }));
    },
    close(ws) {
      const currentUser = users.get(ws.data.id);
      users.set(currentUser!.id, {
        ...currentUser!,
        status: "offline",
      });

      // Send message to all clients subscribed to the chat channel that user left
      ws.publish("chat", JSON.stringify({ type: "USERS_REMOVE", data: ws.data.username }));
    },
  },
});
