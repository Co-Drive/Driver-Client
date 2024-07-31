export interface FollowerHeaderProps {
    filter: {
      clickedGroup: string;
      isOptionOpen: boolean;
      sorting: string;
    };
    handleClickInput: () => void;
    handleClickOption: (selectedGroup: string) => void;
    handleClickSorting: (
      e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
    ) => void;
  }
  