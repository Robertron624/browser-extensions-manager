import { useFilter } from "../hooks/useFilter";
import { FilterState } from "../types";
import { filterOptions } from "../constants";
import './FilterButtons.css';

type FilterButtonProps = {
  label: string;
  value: FilterState;
  isActive: boolean;
  onClick: (value: FilterState) => void;
};

const FilterButton = ({ label, value, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      className={`filter-button ${isActive ? 'active' : ''}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
}

const FilterButtons = () => {
  const { activeFilter, setActiveFilter } = useFilter();

  return (
    <div className="filter-buttons mx-auto justify-center">
      {filterOptions.map((option) => (
        <FilterButton
          key={option.value}
          label={option.label}
          value={option.value}
          isActive={activeFilter === option.value}
          onClick={setActiveFilter}
        />
      ))}
    </div>
  );
}

export default FilterButtons;