const socket = new WebSocket("ws://localhost:4000");
const socketTypes = ["MESSAGES_ADD", "MESSAGES_SET", "USERS_ADD", "USERS_REMOVE", "USERS_SET"];
type SocketType = (typeof socketTypes)[number];

export function chatSocket() {
  // Listen for messages
  socket.addEventListener("message", (e) => {
    // Data sent will be a string so parse into an object
    const event = JSON.parse(e.data);

    // Server sets a type for each message
    switch (event.type as SocketType) {
      case "MESSAGES_ADD":
        addMessage(event.data);
        break;
      case "MESSAGES_SET":
        setMessages(event.data);
        break;
      case "USERS_ADD":
        addUser(event.data);
        break;
      case "USERS_REMOVE":
        removeUser(event.data);
        break;
      case "USERS_SET":
        setUsers(event.data);
        break;
    }
  });
}
