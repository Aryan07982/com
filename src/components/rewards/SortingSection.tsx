import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Define a type for the sort options
interface SortOption {
  value: string;
  label: string;
}

// Define the sort options array with the specified type
const sortOptions: SortOption[] = [
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'name_asc', label: 'Name: A to Z' },
  { value: 'name_desc', label: 'Name: Z to A' },
  // Add more sort options as needed
];

interface SortingSectionProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  totalItems: number;
}

export const SortingSection = ({ sortBy, onSortChange, totalItems }: SortingSectionProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Sort by:</span>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm text-gray-500">
        {totalItems} items
      </div>
    </div>
  );
};
