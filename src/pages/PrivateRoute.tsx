import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import {
	Bird,
	Book,
	Bot,
	Code2,
	LifeBuoy,
	Rabbit,
	Settings,
	Settings2,
	Share,
	SquareTerminal,
	SquareUser,
	Triangle,
	Turtle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";

const SIDE_MENUS = [
	{
		name: "Posts",
		icon: <Book className="size-5" />,
		href: "posts",
	},
	{
		name: "Users",
		icon: <SquareUser className="size-5" />,
		href: "users",
	},
	{
		name: "Albums",
		icon: <Settings className="size-5" />,
		href: "albums",
	},
	{
		name: "Photos",
		icon: <Settings className="size-5" />,
		href: "photos",
	},
	{
		name: "Todo",
		icon: <Settings className="size-5" />,
		href: "todo",
	},
];

const PrivateRoute = () => {
	const navigate = useNavigate();
	const userData = JSON.parse(localStorage.getItem("user") || "{}");

	useEffect(() => {
		if (!userData.email && !userData.password) {
			navigate("/login", { replace: true });
		}
	}, [userData, navigate]);

	return (
		<div className="grid h-screen w-full pl-[56px]">
			<aside className="fixed left-0 z-20 flex flex-col h-full border-r inset-y">
				<div className="p-2 border-b">
					<Button variant="outline" size="icon" aria-label="Home">
						<Triangle className="size-5 fill-foreground" />
					</Button>
				</div>
				<nav className="grid gap-1 p-2">
					<TooltipProvider>
						{/* <Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg bg-muted"
									aria-label="Playground"
								>
									<SquareTerminal className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Playground
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg"
									aria-label="Models"
								>
									<Bot className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Models
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg"
									aria-label="API"
								>
									<Code2 className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								API
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg"
									aria-label="Documentation"
								>
									<Book className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Documentation
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg"
									aria-label="Settings"
								>
									<Settings2 className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Settings
							</TooltipContent>
						</Tooltip> */}

						{SIDE_MENUS.map((menu) => (
							<Tooltip key={menu.name}>
								<TooltipTrigger asChild>
									<Link to={menu.href}>
										<Button
											variant="ghost"
											size="icon"
											className="rounded-lg"
											aria-label={menu.name}
										>
											{menu.icon}
										</Button>
									</Link>
								</TooltipTrigger>
								<TooltipContent side="right" sideOffset={5}>
									{menu.name}
								</TooltipContent>
							</Tooltip>
						))}
					</TooltipProvider>
				</nav>
				<nav className="grid gap-1 p-2 mt-auto">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="mt-auto rounded-lg"
									aria-label="Help"
								>
									<LifeBuoy className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Help
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="mt-auto rounded-lg"
									aria-label="Account"
								>
									<SquareUser className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Account
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>
			<div className="flex flex-col">
				<header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
					<h1 className="text-xl font-semibold">Playground</h1>
					<Drawer>
						<DrawerTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Settings className="size-4" />
								<span className="sr-only">Settings</span>
							</Button>
						</DrawerTrigger>
						<DrawerContent className="max-h-[80vh]">
							<DrawerHeader>
								<DrawerTitle>Configuration</DrawerTitle>
								<DrawerDescription>
									Configure the settings for the model and messages.
								</DrawerDescription>
							</DrawerHeader>
							<form className="grid items-start w-full gap-6 p-4 pt-0 overflow-auto">
								<fieldset className="grid gap-6 p-4 border rounded-lg">
									<legend className="px-1 -ml-1 text-sm font-medium">
										Settings
									</legend>
									<div className="grid gap-3">
										<Label htmlFor="model">Model</Label>
										<Select>
											<SelectTrigger
												id="model"
												className="items-start [&_[data-description]]:hidden"
											>
												<SelectValue placeholder="Select a model" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="genesis">
													<div className="flex items-start gap-3 text-muted-foreground">
														<Rabbit className="size-5" />
														<div className="grid gap-0.5">
															<p>
																Neural{" "}
																<span className="font-medium text-foreground">
																	Genesis
																</span>
															</p>
															<p className="text-xs" data-description>
																Our fastest model for general use cases.
															</p>
														</div>
													</div>
												</SelectItem>
												<SelectItem value="explorer">
													<div className="flex items-start gap-3 text-muted-foreground">
														<Bird className="size-5" />
														<div className="grid gap-0.5">
															<p>
																Neural{" "}
																<span className="font-medium text-foreground">
																	Explorer
																</span>
															</p>
															<p className="text-xs" data-description>
																Performance and speed for efficiency.
															</p>
														</div>
													</div>
												</SelectItem>
												<SelectItem value="quantum">
													<div className="flex items-start gap-3 text-muted-foreground">
														<Turtle className="size-5" />
														<div className="grid gap-0.5">
															<p>
																Neural{" "}
																<span className="font-medium text-foreground">
																	Quantum
																</span>
															</p>
															<p className="text-xs" data-description>
																The most powerful model for complex
																computations.
															</p>
														</div>
													</div>
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="grid gap-3">
										<Label htmlFor="temperature">Temperature</Label>
										<Input id="temperature" type="number" placeholder="0.4" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="top-p">Top P</Label>
										<Input id="top-p" type="number" placeholder="0.7" />
									</div>
									<div className="grid gap-3">
										<Label htmlFor="top-k">Top K</Label>
										<Input id="top-k" type="number" placeholder="0.0" />
									</div>
								</fieldset>
								<fieldset className="grid gap-6 p-4 border rounded-lg">
									<legend className="px-1 -ml-1 text-sm font-medium">
										Messages
									</legend>
									<div className="grid gap-3">
										<Label htmlFor="role">Role</Label>
										<Select defaultValue="system">
											<SelectTrigger>
												<SelectValue placeholder="Select a role" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="system">System</SelectItem>
												<SelectItem value="user">User</SelectItem>
												<SelectItem value="assistant">Assistant</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="grid gap-3">
										<Label htmlFor="content">Content</Label>
										<Textarea id="content" placeholder="You are a..." />
									</div>
								</fieldset>
							</form>
						</DrawerContent>
					</Drawer>
					<Button
						variant="outline"
						size="sm"
						className="ml-auto gap-1.5 text-sm"
					>
						<Share className="size-3.5" />
						Share
					</Button>
				</header>
				<main className="w-full p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default PrivateRoute;
