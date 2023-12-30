import { FC } from "hono/dist/types/jsx";

export const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <link href="/static/output.css" rel="stylesheet" />
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        />
        <meta charset="UTF-8" />
        <title>Bun Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{props.children}</body>
    </html>
  );
};
