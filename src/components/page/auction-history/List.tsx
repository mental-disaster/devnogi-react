import {
  List,
  ListHeader,
  ListHeaderCell,
  ListBody,
  ListRow,
  ListCell,
} from "@/components/ui/list";
import { isoStringFormat } from "@/utils/date";

export type AuctionHistory = {
  id: number;
  dateAuctionBuy: string;
  itemName: string;
  auctionPricePerUnit: number;
  itemCount: string;
};

export default function AuctionHistoryList({
  logs,
}: {
  logs: AuctionHistory[];
}) {
  return (
    <List>
      <ListHeader>
        <ListHeaderCell className="flex-[3]">판매일시</ListHeaderCell>
        <ListHeaderCell className="flex-[5]">상품명</ListHeaderCell>
        <ListHeaderCell className="flex-[3]">가격</ListHeaderCell>
        <ListHeaderCell className="flex-[1]">수량</ListHeaderCell>
      </ListHeader>
      <ListBody>
        {logs.map((log) => (
          <ListRow key={log.id}>
            <ListCell className="flex-[3]">
              {isoStringFormat(log.dateAuctionBuy, "yyyy-MM-dd HH:mm")}
            </ListCell>
            <ListCell className="flex-[5]">{log.itemName}</ListCell>
            <ListCell className="flex-[3]">
              {log.auctionPricePerUnit.toLocaleString()} Gold
            </ListCell>
            <ListCell className="flex-[1]">{log.itemCount} 개</ListCell>
          </ListRow>
        ))}
      </ListBody>
    </List>
  );
}
