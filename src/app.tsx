import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { Chat } from "./components/chat";

const app = new Hono();

app.use("*", logger());
app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Chat />);
});

app.get("/chat", () => {
  return new Response(Bun.file("./src/asd.html"));
});

export default app;
