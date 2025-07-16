import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export type TradeLog = {
  id: number;
  date: string;
  item: string;
  price: string;
  status: string;
};

export default function TradeLogList({ logs }: { logs: TradeLog[] }) {
  const tooltipContent = (trade: TradeLog) => {
    return `날짜: ${trade.date}\n상품명: ${trade.item}\n가격: ${trade.price}\n상태: ${trade.status}`;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/6">날짜</TableHead>
          <TableHead className="w-2/6">상품명</TableHead>
          <TableHead className="w-2/6">가격</TableHead>
          <TableHead className="w-1/6">상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((trade) => (
          <TableRow key={trade.id} tooltipContent={tooltipContent(trade)}>
            <TableCell className="w-1/6">{trade.date}</TableCell>
            <TableCell className="w-2/6">{trade.item}</TableCell>
            <TableCell className="w-2/6">{trade.price}</TableCell>
            <TableCell className="w-1/6">{trade.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
