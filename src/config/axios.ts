// Create Axios interceptor
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	// headers: {
	// 	Accept: "application/vnd.github.v3+json",
	// },
});
