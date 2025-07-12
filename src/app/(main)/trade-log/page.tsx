"use client";

import CategoryLayout from "@/components/commons/FilterableListLayout";
import TradeLogList from "@/components/page/trade-log/List";
import { tradeLogs } from "@/data/mock-data";

export default function TradeLogPage() {
  return (
    <CategoryLayout categoryStorageKey="lastSelectedCategoryTradeLog">
      <TradeLogList logs={tradeLogs} />
    </CategoryLayout>
  );
}
