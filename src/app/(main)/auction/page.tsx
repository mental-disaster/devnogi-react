"use client";

import CategoryLayout from "@/components/commons/FilterableListLayout";
import PageTitle from "@/components/commons/PageTitle";
import AuctionList from "@/components/page/auction/List";
import { mockItems } from "@/data/mock-data";
import { useState } from "react";

export default function Page() {
  const [category, setCategory] = useState<string>("all");
  const [itemName, setItemName] = useState<string>("");

  return (
    <div className="container min-w-full">
      <div className="mb-4 pt-4 px-4">
        <PageTitle title="경매장 아이템 검색" />
      </div>

      <CategoryLayout
        selectedCategory={category}
        setSelectedCategory={setCategory}
        itemName={itemName}
        setItemName={setItemName}
        categoryStorageKey="lastSelectedCategoryAuction"
      >
        <AuctionList items={mockItems} />
      </CategoryLayout>
    </div>
  );
}
