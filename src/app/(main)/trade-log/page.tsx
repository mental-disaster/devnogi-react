"use client";

import CategoryLayout from "@/components/commons/FilterableListLayout";
import TradeLogList from "@/components/page/trade-log/List";

export default function TradeLogPage() {
  return (
    <CategoryLayout categoryStorageKey="lastSelectedCategoryTradeLog">
      <TradeLogList />
    </CategoryLayout>
  );
}
