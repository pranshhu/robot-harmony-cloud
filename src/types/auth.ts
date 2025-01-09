export type UserRole = "admin" | "manager" | "operator" | "viewer";

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}