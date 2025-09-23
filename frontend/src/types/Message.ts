/** @format */

// The message type
export type Message = {
  sender: "user" | "bot" | "system";
  text: string;
  timestamp: Date;
};
export type Messages = Message[];
