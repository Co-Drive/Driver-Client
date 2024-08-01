import { PageHeaderProps } from '../../../types/Solve/solveTypes';
import { api } from '../../api';

export const postRecords = async ({
  questionInfo,
  codeblocks,
}: PageHeaderProps) => {
  const { title, level, tags, platform, problemUrl } = questionInfo;

  const data = await api.post('/records', {
    title: title,
    level: level,
    tags: tags,
    platform: platform,
    problemUrl: problemUrl,
    codeblocks: codeblocks.map(({ id, ...rest }) => rest),
  });

  return data.data;
};
