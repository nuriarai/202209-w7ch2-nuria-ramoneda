import type { Request } from "express";
import type { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  userId: string;
}
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
