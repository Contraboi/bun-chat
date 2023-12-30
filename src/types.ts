export type FullName = `${string} ${string}`;

export type Status = "online" | "offline";
export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type User = {
  id: UUID;
  name: FullName;
  image: string;
  status: Status;
};

export type Message = {
  id: number;
  content: string;
  createdAt: string;
  user: User;
};
