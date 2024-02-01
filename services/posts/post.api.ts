import Api from "../api";
import { message, notification } from "antd";
import { IPost } from "./post.type";
import { CommonResponse } from "../app";

const getPostList = async (params?: any) => {
  try {
    const res = await Api<CommonResponse<IPost[]>>({
      url: `/posts`,
      method: "GET",
      params: { populate: "deep,2", ...params },
    });
    return res.data;
  } catch (error: any) {
    message.error(error?.message);
  }
};

const getPostDetail = async (slug: string) => {
  try {
    const res = await Api({
      url: `/posts`,
      method: "GET",
      params: {
        populate: "deep,3",
        pagination: { page: 1, pageSize: 1, withCount: true },
        filters: {
          slug,
        },
      },
    });
    return res.data;
  } catch (error: any) {
    message.error(error?.message);
  }
};

const updatePost = async (id: string, data: Partial<IPost>) => {
  try {
    const res = await Api({
      url: `/posts/${id}`,
      method: "PUT",
      data: { data },
    });

    if (res.data) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

const createPostComment = async (comment: string, postId: string) => {
  try {
    const res = await Api({
      url: `/comments`,
      method: "POST",
      data: { data: { comment, post: { id: postId } } },
    });

    if (res.data) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

const PostApi = {
  getPostList,
  getPostDetail,
  updatePost,
  createPostComment,
};

export default PostApi;
