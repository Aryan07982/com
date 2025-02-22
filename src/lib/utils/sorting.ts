export type SortOption = {
  label: string;
  value: string;
};

export const sortOptions: SortOption[] = [
  { label: "Featured", value: "featured" },
  { label: "Points: Low to High", value: "points-asc" },
  { label: "Points: High to Low", value: "points-desc" },
  { label: "Rating: High to Low", value: "rating-desc" },
  { label: "Most Popular", value: "popular" }
];

// Define the shape of a reward item
export interface RewardItem {
  points: number;
  rating: number;
  reviews: number;
  [key: string]: any; // For any additional properties
}

export const sortRewards = (rewards: RewardItem[], sortBy: string): RewardItem[] => {
  const sortedRewards = [...rewards];
  
  switch (sortBy) {
    case "points-asc":
      return sortedRewards.sort((a, b) => a.points - b.points);
    case "points-desc":
      return sortedRewards.sort((a, b) => b.points - a.points);
    case "rating-desc":
      return sortedRewards.sort((a, b) => b.rating - a.rating);
    case "popular":
      return sortedRewards.sort((a, b) => b.reviews - a.reviews);
    default:
      return sortedRewards; // Return original order for "featured"
  }
};
