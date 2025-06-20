import type { FilterState } from "./types";

export const filterOptions: { label: string; value: FilterState }[] = [
  { label: 'All', value: "all" },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];