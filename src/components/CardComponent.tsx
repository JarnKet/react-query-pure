import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CardComponentProps {
	title?: string;
	description?: string;
	children: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
}

const CardComponent = ({
	title,
	description,
	children,
	footer,
	className,
}: CardComponentProps) => {
	return (
		<Card>
			{title || description ? (
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
			) : null}
			<CardContent className={className}>{children}</CardContent>
			<CardFooter>{footer}</CardFooter>
		</Card>
	);
};

export default CardComponent;
