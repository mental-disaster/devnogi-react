import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export type AuctionItem = {
  id: number;
  name: string;
  timeLeft: string;
  tradeType: string;
  pricePerUnit: string;
};

export default function AuctionList({ items }: { items: AuctionItem[] }) {
  return (
    <Table className="flex-1">
      <TableHeader>
        <TableRow>
          <TableHead className="w-4/9">아이템</TableHead>
          <TableHead className="w-1/9">남은 시간</TableHead>
          <TableHead className="w-1/9">거래 방식</TableHead>
          <TableHead className="w-3/9">가격</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-4/9">{item.name}</TableCell>
            <TableCell className="w-1/9">{item.timeLeft}</TableCell>
            <TableCell className="w-1/9">{item.tradeType}</TableCell>
            <TableCell className="w-3/9">{item.pricePerUnit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
