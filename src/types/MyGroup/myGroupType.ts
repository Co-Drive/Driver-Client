export interface ActiveGroupProps {
  item: Array<{
    id: number;
    title: string;
    contents: string;
    tags: Array<string>;
  }>;
}
