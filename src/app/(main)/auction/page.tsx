"use client";

import CategoryLayout from "@/components/commons/FilterableListLayout";
import AuctionList from "@/components/page/auction/List";
import { mockItems } from "@/data/mock-items";

export default function Page() {
  return (
    <CategoryLayout categoryStorageKey="lastSelectedCategoryAuction">
      <AuctionList items={mockItems} />
    </CategoryLayout>
  );
}
