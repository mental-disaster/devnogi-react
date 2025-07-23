"use client";

import { ItemOption } from "@/app/(main)/auction-history/page";
import { Plus } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface ItemOptionsProps {
  itemOptions: Record<string, ItemOption>;
  setItemOptions: (options: Record<string, ItemOption>) => void;
}

export default function OptionsFloatingButton({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemOptions,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setItemOptions,
}: ItemOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <Plus className="w-5 h-5" />
        </button>
      </PopoverTrigger>

      <PopoverContent side="top" align="end" className="w-64 p-4">
        팝오버 컨텐츠
      </PopoverContent>
    </Popover>
  );
}
