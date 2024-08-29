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
  capacity: number;
}
