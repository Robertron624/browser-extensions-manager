import { useState, useMemo, ReactNode } from "react";
import { FilterContext } from "./FilterContextInstance";
import { FilterState, Extension, FilterContextType } from "../types";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterState>('all');
  const [extensions, setExtensions] = useState<Extension[]>([]);

  const filteredExtensions = useMemo(() => {
    switch (activeFilter) {
      case 'active':
        return extensions.filter(extension => extension.isActive);
      case 'inactive':
        return extensions.filter(extension => !extension.isActive);
      case 'all':
      default:
        return extensions;
    }
  }, [activeFilter, extensions]);

  const contextValue: FilterContextType = {
    activeFilter,
    setActiveFilter,
    filteredExtensions,
    extensions,
    setExtensions,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};