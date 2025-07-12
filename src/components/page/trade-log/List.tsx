import {
  List,
  ListHeader,
  ListHeaderCell,
  ListBody,
  ListRow,
  ListCell,
} from "@/components/ui/list";

export type TradeLog = {
  id: number;
  date: string;
  item: string;
  price: string;
  status: string;
};

export default function TradeLogList({ logs }: { logs: TradeLog[] }) {
  return (
    <List>
      <ListHeader>
        <ListHeaderCell className="flex-[2]">날짜</ListHeaderCell>
        <ListHeaderCell className="flex-[5]">상품명</ListHeaderCell>
        <ListHeaderCell className="flex-[3]">가격</ListHeaderCell>
        <ListHeaderCell className="flex-[2]">상태</ListHeaderCell>
      </ListHeader>
      <ListBody>
        {logs.map((trade) => (
          <ListRow key={trade.id}>
            <ListCell className="flex-[2]">{trade.date}</ListCell>
            <ListCell className="flex-[5]">{trade.item}</ListCell>
            <ListCell className="flex-[3]">{trade.price}</ListCell>
            <ListCell className="flex-[2]">{trade.status}</ListCell>
          </ListRow>
        ))}
      </ListBody>
    </List>
  );
}
