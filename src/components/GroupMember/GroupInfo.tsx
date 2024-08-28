import React from 'react';
import { useParams } from 'react-router-dom';
import useGetDetail from '../../libs/hooks/GroupDetail/useGetDetail';

const GroupInfo = () => {
    const { id } = useParams();
  if (!id) return;
  const groupId = parseInt(id);
  const { data, isLoading } = useGetDetail(groupId);
  const { imageSrc, title, tags, owner } = !isLoading && data?.data;
    return (
        <div>
            
        </div>
    );
};

export default GroupInfo;