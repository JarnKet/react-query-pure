import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
	title: string;
	trigger: React.ReactNode;
	description?: string;
	children: React.ReactNode;
	// action: React.ReactNode;
	className?: string;
}

export default function Modal({
	title,
	trigger,
	description,
	children,
	// action,
	className,
}: ModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className={className}>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					{description ? (
						<DialogDescription>{description}</DialogDescription>
					) : null}
				</DialogHeader>
				{children}
				{/* <DialogFooter className="justify-end gap-4">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
					<DialogClose>{action}</DialogClose>
				</DialogFooter> */}
			</DialogContent>
		</Dialog>
	);
}
