import { axiosInstance } from "../config/axios";
import type { MutatePost } from "@/interfaces/posts";

export const getPosts = async (params?: { [key: string]: string | number }) => {
	const res = await axiosInstance.get("/posts", {
		params: params,
	});

	return res.data;
};

export const getPost = async (id: number | string | undefined) => {
	const res = await axiosInstance.get(`/posts/${id}`);
	return res.data;
};

export const editPost = async (
	id: number | string | undefined,
	data: MutatePost,
) => {
	const res = await axiosInstance.put(`/posts/${id}`, data);
	return res.data;
};

export const createPost = async (data: MutatePost) => {
	const res = await axiosInstance.post("/posts", data);
	return res.data;
};

export const deletePost = async (id: number | string | undefined) => {
	const res = await axiosInstance.delete(`/posts/${id}`);
	return res.data;
};
