import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface Props {
	trigger: React.ReactNode;
	children?: React.ReactNode;
	title: string;
	description?: string;
	action?: React.ReactNode;
	className?: string;
	onAction?: () => void;
}

export default function AlertModal({
	trigger,
	children,
	title,
	description,
	action,
	className,
	onAction,
}: Props) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				{trigger || <Button variant="outline">Show Dialog</Button>}
			</AlertDialogTrigger>
			<AlertDialogContent className={className}>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				{children}
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					{action || (
						<AlertDialogAction onClick={onAction}>Delete</AlertDialogAction>
					)}
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
