"use client";

import React, { useState, useEffect } from "react";
import AuctionCategory from "@/components/page/auction/category";
import AuctionList from "@/components/page/auction/list";
import AuctionSearch from "@/components/page/auction/search";
import { ItemCategory, itemCategories } from "@/data/item-category";
import { mockItems } from "@/data/mock-items";

const STORAGE_KEY = "lastSelectedCategory";

export default function Page() {
  const [selectedId, setSelectedId] = useState<string>("all");
  const [isClient, setIsClient] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [categoryPath, setCategoryPath] = useState<ItemCategory[]>([]);

  const findCategoryPath = (
    categories: ItemCategory[],
    targetId: string,
    currentPath: ItemCategory[] = [],
  ): ItemCategory[] => {
    for (const category of categories) {
      const newPath = [...currentPath, category];
      if (category.id === targetId) {
        return newPath;
      }
      if (category.children) {
        const foundPath = findCategoryPath(
          category.children,
          targetId,
          newPath,
        );
        if (foundPath.length > 0) {
          return foundPath;
        }
      }
    }
    return [];
  };

  const handleCategorySelect = (id: string) => {
    setSelectedId(id);
    if (isClient) {
      localStorage.setItem(STORAGE_KEY, id);
    }
  };

  const handleToggleExpand = (categoryId: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // 웹페이지 재접속시에도 기존 카테고리 선택 유지
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSelectedId(saved);
    }
  }, []);

  // selectedId가 변경될 때마다 categoryPath와 expandedIds 업데이트
  useEffect(() => {
    const path = findCategoryPath(itemCategories, selectedId);
    setCategoryPath(path);

    // 기존에 열려있던 카테고리들을 유지하면서 선택된 카테고리 경로 추가
    setExpandedIds((prev) => {
      const newSet = new Set([
        ...prev,
        ...path.slice(0, -1).map((category) => category.id),
      ]);
      return newSet;
    });
  }, [selectedId]);

  return (
    <div className="select-none flex flex-col h-full">
      <div className="flex-shrink-0 px-4 py-2">
        <AuctionSearch
          path={categoryPath}
          onCategorySelect={handleCategorySelect}
        />
      </div>
      <div className="flex px-4 py-2">
        <div className="w-44 flex-shrink-0 overflow-auto lg:flex hidden">
          <AuctionCategory
            selectedId={selectedId}
            onSelect={handleCategorySelect}
            expandedIds={expandedIds}
            onToggleExpand={handleToggleExpand}
          />
        </div>
        <div className="flex-1">
          <AuctionList items={mockItems} />
        </div>
      </div>
    </div>
  );
}
