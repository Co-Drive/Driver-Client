export interface GroupInfoProps {
  isAdmin: boolean;
  adminMode?: boolean;
  handleClickAdminToggle?: () => void;
}

export interface MemberHeaderProps {
  sorting: string;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

export interface GetMemberListProps {
  groupId: number;
  sortType: string;
  page: number;
}
