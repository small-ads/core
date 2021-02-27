export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}
export enum AuthStatuses {
  notLoggedIn,
  loggedIn,
  loading,
}

export interface Login {
  user: User | null;
  error?: string | null;
  authStatus: AuthStatuses;
}