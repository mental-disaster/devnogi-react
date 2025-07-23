import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TradeLogPage from "./page";
import { clientAxios } from "@/lib/api/clients";
import { AUCTION_HISTORY_ENDPOINT } from "@/lib/api/constants";

const mockedClientAxios = clientAxios as unknown as jest.Mock;

jest.mock("@/lib/api/clients", () => ({
  clientAxios: jest.fn(),
}));

jest.mock("@/components/auction/FilterableListLayout", () => {
  const MockFilterableListLayout = ({
    selectedCategory,
    setSelectedCategory,
    itemName,
    setItemName,
    children,
  }: {
    selectedCategory: string;
    setSelectedCategory: (cat: string) => void;
    itemName: string;
    setItemName: (name: string) => void;
    children: React.ReactNode;
  }) => (
    <div>
      <span data-testid="selected-category">{selectedCategory}</span>
      <button
        data-testid="change-category"
        onClick={() => setSelectedCategory("newCat")}
      >
        Change Category
      </button>
      <span data-testid="item-name">{itemName}</span>
      <button data-testid="change-name" onClick={() => setItemName("newName")}>
        Change Name
      </button>
      {children}
    </div>
  );
  MockFilterableListLayout.displayName = "FilterableListLayout";

  return MockFilterableListLayout;
});

jest.mock("@/components/page/auction-history/List", () => {
  const MockList = ({
    auctionHistoryList,
  }: {
    auctionHistoryList: string[];
  }) => (
    <ul data-testid="trade-log-list">
      {auctionHistoryList.map((log: string, idx: number) => (
        <li key={idx} data-testid="log-item">
          {log}
        </li>
      ))}
    </ul>
  );
  MockList.displayName = "MockList";

  return MockList;
});

// TanStack Query 테스트를 위한 래퍼 컴포넌트
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
        gcTime: 0,
      },
    },
  });

const renderWithQueryClient = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>,
  );
};

describe("TradeLogPage", () => {
  beforeEach(() => {
    mockedClientAxios.mockClear();
  });

  it("마운트 시 기본 파라미터로 API 호출 및 리스트 렌더링 테스트", async () => {
    mockedClientAxios.mockResolvedValue({ data: ["log1", "log2"] });

    renderWithQueryClient(<TradeLogPage />);

    await waitFor(() => {
      expect(mockedClientAxios).toHaveBeenCalledWith(AUCTION_HISTORY_ENDPOINT, {
        params: { itemName: "", category: "all" },
      });
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("log-item")).toHaveLength(2);
      expect(screen.getByText("log1")).toBeInTheDocument();
      expect(screen.getByText("log2")).toBeInTheDocument();
    });
  });

  it("파라미터 변경 시 API 재호출 및 리스트 갱신 테스트", async () => {
    mockedClientAxios
      .mockResolvedValueOnce({ data: ["log1", "log2"] })
      .mockResolvedValueOnce({ data: ["catChanged"] })
      .mockResolvedValueOnce({ data: ["nameChanged"] });

    renderWithQueryClient(<TradeLogPage />);

    await waitFor(() => expect(mockedClientAxios).toHaveBeenCalledTimes(1));

    fireEvent.click(screen.getByTestId("change-category"));
    await waitFor(() => {
      expect(mockedClientAxios).toHaveBeenCalledWith(AUCTION_HISTORY_ENDPOINT, {
        params: { itemName: "", category: "newCat" },
      });
      expect(screen.getByText("catChanged")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("change-name"));
    await waitFor(() => {
      expect(mockedClientAxios).toHaveBeenCalledWith(AUCTION_HISTORY_ENDPOINT, {
        params: { itemName: "newName", category: "newCat" },
      });
      expect(screen.getByText("nameChanged")).toBeInTheDocument();
    });
  });

  it("API 호출 실패 시 빈 배열로 렌더링 테스트", async () => {
    mockedClientAxios.mockRejectedValue(new Error("API Error"));

    renderWithQueryClient(<TradeLogPage />);

    await waitFor(() => {
      expect(screen.getByTestId("trade-log-list")).toBeInTheDocument();
      expect(screen.queryAllByTestId("log-item")).toHaveLength(0);
    });
  });
});
