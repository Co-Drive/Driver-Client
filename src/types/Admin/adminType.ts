export interface NumOfMembersProps {
  numOfMembers: {
    memberCount: number;
    capacity: number;
    approvedCount: number;
    requestedCount: number;
  };
}

export interface NumOfLanguagesProps {
  languageMemberCount: Array<{
    language: string;
    count: number;
  }>;
  approvedCount: number;
}

export interface GetRoomInfoProps {
  roomId: number;
}

export interface PatchRoomStatusProps extends GetRoomInfoProps {
  status: string;
}

export interface DeleteMemberProps extends GetRoomInfoProps {
  userId: number;
}

export interface PatchApproveProps extends GetRoomInfoProps {
  requestId: number;
}
