import { User, UUID } from "./types";

export const users = new Map<UUID, User>();

users.set("4f893564-f1c2-4ba5-b3a0-bd50a408afa1", {
  image: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  name: "John Doe",
  status: "online",
  id: "4f893564-f1c2-4ba5-b3a0-bd50a408afa1",
});

users.set("212444d5-fb0c-4b1b-b94b-22d686ffa498", {
  image: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
  name: "Selmir Doe",
  status: "offline",
  id: "212444d5-fb0c-4b1b-b94b-22d686ffa498",
});

export const messages = [
  {
    id: 1,
    content: "Hello from John!",
    createdAt: "2021-06-01T12:00:00.000Z",
    user: users.get("4f893564-f1c2-4ba5-b3a0-bd50a408afa1"),
  },
  {
    id: 2,
    content: "Hello from Selmir!",
    createdAt: "2021-06-01T12:00:00.000Z",
    user: users.get("212444d5-fb0c-4b1b-b94b-22d686ffa498"),
  },
];
