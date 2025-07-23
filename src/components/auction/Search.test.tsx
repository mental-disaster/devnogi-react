import { render, screen, fireEvent } from "@testing-library/react";
import { ItemCategory } from "@/data/item-category";
import SearchSection from "./Search";

const createMockPath = (): ItemCategory[] => [
  { id: "all", name: "전체" },
  { id: "melee", name: "근거리 장비" },
  { id: "one-handed", name: "한손 장비" },
];

describe("AuctionSearch", () => {
  it("카테고리 배지 클릭 동작 테스트", () => {
    const mockPath = createMockPath();
    const mockOnCategorySelect = jest.fn();
    const mockSetItemName = jest.fn();

    render(
      <SearchSection
        path={mockPath}
        onCategorySelect={mockOnCategorySelect}
        itemName=""
        setItemName={mockSetItemName}
      />,
    );

    const categoryBadge = screen.getByText("근거리 장비");
    fireEvent.click(categoryBadge);

    expect(mockOnCategorySelect).toHaveBeenCalledWith("melee");
  });
});
