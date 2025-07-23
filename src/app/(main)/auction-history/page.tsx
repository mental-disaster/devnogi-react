"use client";

import CategoryLayout from "@/components/auction/FilterableListLayout";
import OptionsFloatingButton from "@/components/auction/OptionsFloatingButton";
import PageTitle from "@/components/auction/PageTitle";
import AuctionHistoryList from "@/components/page/auction-history/List";
import { clientAxios } from "@/lib/api/clients";
import { AUCTION_HISTORY_ENDPOINT } from "@/lib/api/constants";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export interface ItemOption {
  optionType: string;
  optionSubType: string;
  optionValue: string;
  optionValue2: string;
  optionDesc: string;
}

export default function Page() {
  const [itemName, setItemName] = useState<string>("");
  const [itemCategory, setItemCategory] = useState<string>("all");
  const [itemOptions, setItemOptions] = useState<Record<string, ItemOption>>(
    {},
  );

  const getAuctionHistory = async () => {
    const response = await clientAxios(AUCTION_HISTORY_ENDPOINT, {
      params: {
        itemName: itemName,
        category: itemCategory,
      },
    });

    return response.data;
  };

  const { data: auctionHistory = [] } = useQuery({
    queryKey: ["auctionHistory", itemName, itemCategory],
    queryFn: getAuctionHistory,
    staleTime: 1000 * 60 * 30, // 캐시 유지시간 30분
    gcTime: 1000 * 60 * 60, // 가비지 컬렉션 시간 1시간
  });

  return (
    <div className="container min-w-full">
      <div className="mb-4 pt-4 px-4">
        <PageTitle title="경매장 거래 내역 검색" />
      </div>

      <CategoryLayout
        selectedCategory={itemCategory}
        setSelectedCategory={setItemCategory}
        itemName={itemName}
        setItemName={setItemName}
        categoryStorageKey="lastSelectedCategoryTradeLog"
      >
        <AuctionHistoryList auctionHistoryList={auctionHistory} />
      </CategoryLayout>

      <OptionsFloatingButton
        itemOptions={itemOptions}
        setItemOptions={setItemOptions}
      />
    </div>
  );
}
