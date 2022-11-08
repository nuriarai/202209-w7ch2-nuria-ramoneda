import type { JwtPayload } from "jsonwebtoken";

export interface Credentials {
  username: string;
  password: string;
}

export interface RegisterData extends Credentials {
  email: string;
}

export interface UserTokenPayload extends JwtPayload {
  id: string;
  username: string;
}
