export interface ActiveGroupProps {
  totalActiveGroups: Array<{
    id: number;
    title: string;
    contents: string;
    tags: Array<string>;
  }>;
}
