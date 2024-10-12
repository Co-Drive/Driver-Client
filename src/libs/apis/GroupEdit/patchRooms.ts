import { api } from '../../api';

interface PatchRoomProps {
  roomId: number;
  title: string;
  password: string;
  capacity: number;
  tags: string[];
  introduce: string;
  information: string;
  imageFile?: File; // imageFile은 선택적
}

const patchRooms = async ({
  roomId,
  title,
  password,
  capacity,
  tags,
  introduce,
  information,
  imageFile,
}: PatchRoomProps) => {
  const formData = new FormData();

  // 필수 값 추가
  formData.append('title', title);
  formData.append('password', password);
  formData.append('capacity', capacity.toString());
  formData.append('tags', JSON.stringify(tags)); // tags 배열을 문자열로 변환
  formData.append('introduce', introduce);
  formData.append('information', information);

  // 이미지 파일이 존재할 경우에만 추가
  if (imageFile) {
    formData.append('imageFile', imageFile);
  }

  const { data } = await api.patch(`/rooms/${roomId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

export default patchRooms;
