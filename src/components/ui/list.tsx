"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const List = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col w-full", className)} {...props} />
));
List.displayName = "List";

const ListHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
ListHeader.displayName = "ListHeader";

const ListHeaderCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border border-gray-600 rounded-xs text-center font-medium",
      className,
    )}
    {...props}
  />
));
ListHeaderCell.displayName = "ListHeaderCell";

const ListBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "space-y-[1px] mt-1 p-1 rounded-xs shadow-sm overflow-y-auto",
      className,
    )}
    {...props}
  />
));
ListBody.displayName = "ListBody";

const ListRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-stretch border border-black p-1 rounded-sm hover:bg-gray-100",
      className,
    )}
    {...props}
  />
));
ListRow.displayName = "ListRow";

const ListCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border rounded-xs shadow-sm flex items-center justify-center",
      className,
    )}
    {...props}
  />
));
ListCell.displayName = "ListCell";

export { List, ListHeader, ListHeaderCell, ListBody, ListRow, ListCell };
