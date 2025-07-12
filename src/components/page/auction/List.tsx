import {
  List,
  ListHeader,
  ListHeaderCell,
  ListBody,
  ListRow,
  ListCell,
} from "@/components/ui/list";

export type AuctionItem = {
  id: number;
  name: string;
  timeLeft: string;
  tradeType: string;
  pricePerUnit: string;
};

export default function AuctionList({ items }: { items: AuctionItem[] }) {
  return (
    <List className="flex-1">
      <ListHeader>
        <ListHeaderCell className="flex-[4]">아이템</ListHeaderCell>
        <ListHeaderCell className="flex-[1]">남은 시간</ListHeaderCell>
        <ListHeaderCell className="flex-[1]">거래 방식</ListHeaderCell>
        <ListHeaderCell className="flex-[3]">가격</ListHeaderCell>
      </ListHeader>
      <ListBody>
        {items.map((item) => (
          <ListRow key={item.id}>
            <ListCell className="flex-[4]">{item.name}</ListCell>
            <ListCell className="flex-[1]">{item.timeLeft}</ListCell>
            <ListCell className="flex-[1]">{item.tradeType}</ListCell>
            <ListCell className="flex-[3]">{item.pricePerUnit}</ListCell>
          </ListRow>
        ))}
      </ListBody>
    </List>
  );
}
