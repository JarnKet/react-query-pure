import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// API
import { getPosts } from "@/api/posts";

// UI
import { TableCell, TableRow, TableHead } from "@/components/ui/table";
import CardComponent from "@/components/CardComponent";
import TableComponent from "@/components/TableComponent";

// Interface
import type { Post } from "@/interfaces/posts";

const PostList = () => {
	const navigate = useNavigate();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["posts"],
		queryFn: () =>
			getPosts({
				skip: 0,
				limit: 10,
			}),
		// refetchOnWindowFocus: true,
		// refetchOnReconnect: true,
		// refetchInterval: 5000,
		// refetchIntervalInBackground: true,
		// staleTime: 1000,
		// retry: 3,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<main className="flex flex-col w-full gap-4">
			<CardComponent title="Posts">
				<TableComponent
					heads={
						<TableRow>
							<TableHead>Title</TableHead>
							<TableHead>Description</TableHead>
						</TableRow>
					}
				>
					{data?.map((post: Post) => (
						<TableRow key={post?.id} onClick={() => navigate(`${post?.id}`)}>
							<TableCell>{post?.title}</TableCell>
							<TableCell>{post?.body?.slice(0, 20)}...</TableCell>
						</TableRow>
					))}
				</TableComponent>
			</CardComponent>
		</main>
	);
};

export default PostList;
