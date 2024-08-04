import {
	Table,
	TableBody,
	TableCaption,
	// TableCell,
	// TableHead,
	TableHeader,
	// TableRow,
} from "@/components/ui/table";

interface TableComponentProps {
	heads: React.ReactNode;
	children: React.ReactNode;
	caption?: string;
}

const TableComponent = ({ heads, children, caption }: TableComponentProps) => {
	return (
		<Table className="w-full h-full">
			<TableCaption>{caption}</TableCaption>
			<TableHeader>
				{/* <TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow> */}
				{heads}
			</TableHeader>
			<TableBody>
				{/* <TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow> */}
				{children}
			</TableBody>
		</Table>
	);
};

export default TableComponent;
