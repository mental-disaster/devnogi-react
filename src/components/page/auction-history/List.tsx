import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { isoStringFormat } from "@/utils/date";

export type AuctionHistory = {
  id: number;
  dateAuctionBuy: string;
  itemName: string;
  auctionPricePerUnit: number;
  itemCount: string;
};

export default function AuctionHistoryList({
  auctionHistoryList,
}: {
  auctionHistoryList: AuctionHistory[];
}) {
  const tooltipContent = (history: AuctionHistory) => {
    return `날짜: ${isoStringFormat(history.dateAuctionBuy)}\n상품명: ${history.itemName}\n가격: ${history.auctionPricePerUnit.toLocaleString()} Gold\n개수: ${history.itemCount} 개`;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/6">날짜</TableHead>
          <TableHead className="w-2/6">상품명</TableHead>
          <TableHead className="w-2/6">가격</TableHead>
          <TableHead className="w-1/6">개수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {auctionHistoryList.map((auctionHistory) => (
          <TableRow
            key={auctionHistory.id}
            tooltipContent={tooltipContent(auctionHistory)}
          >
            <TableCell className="w-1/6">
              {isoStringFormat(auctionHistory.dateAuctionBuy)}
            </TableCell>
            <TableCell className="w-2/6">{auctionHistory.itemName}</TableCell>
            <TableCell className="w-2/6">
              {auctionHistory.auctionPricePerUnit.toLocaleString()} Gold
            </TableCell>
            <TableCell className="w-1/6">
              {auctionHistory.itemCount} 개
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
