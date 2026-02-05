import "express-session";

declare module "express" {
  export interface Request {
    user?: string;
    token?: string;
  }
}
declare module "express-session" {
  interface SessionData {
    isLogged?: boolean;
    user?: {
      id: number;
      name: string;
      email: string;
    };
  }
}
