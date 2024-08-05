import { PatchRecordsProps } from '../../../types/Solve/solveTypes';
import { api } from '../../api';

export const patchRecords = async ({
  id,
  questionInfo,
  codeblocks,
}: PatchRecordsProps) => {
  const { title, level, tags, platform, problemUrl } = questionInfo;
  const data = await api.patch(`/records/${id}`, {
    title: title,
    level: level,
    tags: tags,
    platform: platform,
    problemUrl: problemUrl,
    codeblocks: codeblocks.map(({ id, ...rest }) => rest),
  });

  return data.data;
};
