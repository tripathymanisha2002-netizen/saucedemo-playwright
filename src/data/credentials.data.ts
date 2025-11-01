
import { TCredentials } from "../types/credentials.type";

export const users: Record<string, TCredentials> = {
  standardUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
  visualUser: {
    username: "visual_user",
    password: "secret_sauce",
  },
};
