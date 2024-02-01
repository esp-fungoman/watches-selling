import { ICategory } from "@/services/categories";
import { ITag } from "../tags";

export interface IPost {
  id: any;
  title: string;
  content: string;
  thumbnail?: IPostThumbnail;
  thumbnail_caption?: string;
  short_description?: string;
  slug: string;
  is_shown: boolean;
  view_count: string;
  categories?: ICategory[];
  tags?: ITag[];
  author?: IAuthor;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  comments: { comment: string; createdAt: any; user: any; show?: boolean }[];
}

export interface IAuthor {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  avatar?: string;
}

export interface IPostThumbnail {
  id: number;
  name: string;
  mime: string;
  url: string;
  width: number;
  height: number;
}
