import { useState, useMemo, ReactNode, useEffect } from "react";
import { FilterContext } from "./FilterContextInstance";
import { FilterState, Extension, FilterContextType } from "../types";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterState>("all");
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // load extensions data from JSON file
  useEffect(() => {
    const loadExtensions = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch extensions data");
        }
        const data = await response.json();
        setExtensions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        console.error("Error loading extensions:", err);
      } finally {
        setLoading(false);
      }
    };

    loadExtensions();
  }, []);

  const toggleExtensionStatus = (id: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.id === id
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  };

  const removeExtension = (id: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.id !== id)
    );
  };

  const filteredExtensions = useMemo(() => {
    switch (activeFilter) {
      case "active":
        return extensions.filter((extension) => extension.isActive);
      case "inactive":
        return extensions.filter((extension) => !extension.isActive);
      case "all":
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
    toggleExtensionStatus,
    removeExtension,
    loading,
    error,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
