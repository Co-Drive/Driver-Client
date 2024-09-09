export interface LanguageSelectBoxProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  sliderValues: { min: number; max: number };
  setSliderValues: (values: { min: number; max: number }) => void; // 추가
}

export interface GetRoomSortProps {
  sortType: string;
  page?: number;
}
