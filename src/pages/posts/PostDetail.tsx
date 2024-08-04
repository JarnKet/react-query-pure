import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// UI
import {
	Card,
	CardHeader,
	CardContent,
	CardDescription,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AlertModal from "@/components/AlertModal";
import Modal from "@/components/Modal";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@/components/ui/dialog";

// API
import { getPost, deletePost, editPost } from "@/api/posts";
import type { MutatePost } from "@/interfaces/posts";

const PostDetail = () => {
	const { id } = useParams();
	const { toast } = useToast();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	// Get Post Detail
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["posts", id],
		queryFn: () => getPost(id),
		enabled: !!id, // only fetch when id exists
	});

	// Edit Post
	const { mutate: editPostMutate, isPending: isEditingPost } = useMutation({
		mutationFn: (data: MutatePost) => editPost(id, data),
		onError: (error) => {
			toast({
				title: "Failed",
				description: JSON.stringify(error),
				variant: "destructive",
			});
		},
		onSuccess: () => {
			toast({
				title: "Success",
				description: "Post updated successfully",
			});

			queryClient.invalidateQueries({ queryKey: ["posts", id] });
		},
	});

	const handleEditPost = (event: React.FormEvent) => {
		event.preventDefault();
		const { title, body } = event.target as typeof event.target & {
			title: { value: string };
			body: { value: string };
		};

		editPostMutate({ title: title.value, body: body.value });
	};

	// Delete Post
	const { mutate: deletePostMutate, isPending: isDeletingPost } = useMutation({
		mutationFn: () => deletePost(id),
		onError: (error) => {
			toast({
				title: "Failed",
				description: JSON.stringify(error),
				variant: "destructive",
			});
		},
		onSuccess: () => {
			toast({
				title: "Success",
				description: "Post deleted successfully",
			});

			navigate(-1);
		},
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error {JSON.stringify(error)}</div>;
	}

	return (
		<main>
			<Card className="mx-auto md:max-w-2xl">
				<CardHeader>
					<CardTitle>{data?.title}</CardTitle>
					<CardDescription>{data?.description}</CardDescription>
				</CardHeader>
				<CardContent>{data?.body}</CardContent>
				<CardFooter className="flex items-center gap-4">
					<Modal
						title="Edit Post"
						trigger={<Button>{isEditingPost ? "Saving..." : "Edit"}</Button>}
						// action={<Button>Save Change</Button>}
					>
						<form className="space-y-4" onSubmit={handleEditPost}>
							<div className="grid items-center grid-cols-4 gap-4">
								<Label htmlFor="name" className="text-right">
									Title
								</Label>
								<Input
									id="title"
									defaultValue={data?.title}
									className="col-span-3"
									required
								/>
							</div>
							<div className="grid items-center grid-cols-4 gap-4">
								<Label htmlFor="username" className="text-right">
									Body
								</Label>
								<Textarea
									id="body"
									defaultValue={data?.body}
									className="col-span-3"
									required
								/>
							</div>
							<div className="flex items-center justify-end w-full gap-4">
								<DialogClose asChild>
									<Button>Cancel</Button>
								</DialogClose>
								<DialogClose asChild>
									<Button type="submit">
										{isEditingPost ? "Saving..." : "Edit"}
									</Button>
								</DialogClose>
							</div>
						</form>
					</Modal>
					<AlertModal
						title="Are you sure you want to delete this post?"
						trigger={
							<Button disabled={isDeletingPost} variant={"destructive"}>
								{isDeletingPost ? "Deleting..." : "Delete"}
							</Button>
						}
						onAction={() => deletePostMutate()}
					/>
				</CardFooter>
			</Card>
		</main>
	);
};

export default PostDetail;
