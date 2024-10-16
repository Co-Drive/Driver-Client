import { PostRecordsProps } from '../../../types/Solve/solveTypes';
import { api } from '../../api';

export const postTempRecords = async ({
  id,
  questionInfo,
  codeblocks,
}: PostRecordsProps) => {
  const { title, level, tags, platform, problemUrl } = questionInfo;

  const { data } = await api.post('/records/temp', {
    tempRecordId: id ? id : null,
    title: title,
    level: level,
    tags: tags,
    platform: platform,
    problemUrl: problemUrl,
    codeblocks: codeblocks.map(({ id, ...rest }) => rest),
  });

  return data;
};
