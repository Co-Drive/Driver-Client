export interface MemberHeaderProps {
  sorting: string;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

export interface GetMemberListProps {
  roomId: number;
  sortType: string;
}
