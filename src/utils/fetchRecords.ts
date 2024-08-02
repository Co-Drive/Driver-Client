import { getRecords } from '../libs/apis/Solution/getRecords';
import { RecordsTypes } from '../types/Solution/solutionTypes';

interface fetchRecordsProps {
  changeRecords: (data: RecordsTypes) => void;
  recordId: number;
}

export const fetchRecords = async ({
  changeRecords,
  recordId,
}: fetchRecordsProps) => {
  try {
    const { data } = await getRecords(recordId);
    changeRecords(data);
  } catch (err) {
    // 추후 삭제, navigate 코드로 대체할 예정
    console.log(err);
  }
};
