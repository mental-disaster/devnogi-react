import {
  List,
  ListHeader,
  ListHeaderCell,
  ListBody,
  ListRow,
  ListCell,
} from "@/components/ui/list";

const tradeHistory = [
  {
    id: 1,
    date: "2024-07-12",
    item: "맥북 프로 16인치",
    price: "3,000,000원",
    status: "판매 완료",
  },
  {
    id: 2,
    date: "2024-07-11",
    item: "아이폰 15 프로",
    price: "1,500,000원",
    status: "구매 완료",
  },
  {
    id: 3,
    date: "2024-07-10",
    item: "에어팟 맥스",
    price: "700,000원",
    status: "판매 중",
  },
  {
    id: 4,
    date: "2024-07-09",
    item: "애플 워치 울트라",
    price: "1,000,000원",
    status: "판매 완료",
  },
];

export default function TradeLogList() {
  return (
    <List>
      <ListHeader>
        <ListHeaderCell className="flex-[2]">날짜</ListHeaderCell>
        <ListHeaderCell className="flex-[5]">상품명</ListHeaderCell>
        <ListHeaderCell className="flex-[3]">가격</ListHeaderCell>
        <ListHeaderCell className="flex-[2]">상태</ListHeaderCell>
      </ListHeader>
      <ListBody>
        {tradeHistory.map((trade) => (
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
