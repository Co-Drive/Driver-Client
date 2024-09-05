import {
  IcAddBlack,
  IcAddGray,
  IcArrowRightBlack,
  IcBtnCopy,
} from '../../assets';

export const CONTENTS = [
  {
    category: 'group_create',
    text: '그룹 생성하기',
    icon_active: <IcAddBlack />,
    icon_disabled: <IcAddGray />,
  },
  {
    category: 'group_direct',
    text: '그룹 바로가기',
    icon: <IcArrowRightBlack />,
  },
  { category: 'account_create', text: '가입하기' },
  { category: 'link_copy', text: '링크 복사하기', icon: <IcBtnCopy /> },
  { category: 'group_join', text: '참여하기' },
  { category: 'Profile_save', text: '저장하기' },
];
