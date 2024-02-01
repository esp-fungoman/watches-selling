export interface User {
  blocked?: boolean;
  confirmed?: true;
  createdAt: string;
  email: string;
  google_id?: string;
  id: number;
  phone_number: string;
  provider?: string;
  updatedAt: string;
  username?: string;
  avatar_url?: string;
}
