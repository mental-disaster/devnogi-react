"use client";

import CategoryLayout from "@/components/commons/FilterableListLayout";
import AuctionList from "@/components/page/auction/List";
import { mockItems } from "@/data/mock-data";

export default function Page() {
  return (
    <CategoryLayout categoryStorageKey="lastSelectedCategoryAuction">
      <AuctionList items={mockItems} />
    </CategoryLayout>
  );
}
