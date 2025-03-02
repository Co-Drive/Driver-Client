import { SetURLSearchParams } from 'react-router-dom';

type clickedPageType = {
  clickedPage: number;
  sorting: string;
  setSearchParams: SetURLSearchParams;
};

const updateParams = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  const page = clickedPage.toString();

  // sorting이 null이거나 undefined인 경우 false로 처리
  sorting?.trim()
    ? setSearchParams({ page, sort: sorting })
    : setSearchParams({ page });
};

export const handleClickPrevBtn = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  const prevPage = clickedPage - 1;
  updateParams({ clickedPage: prevPage, sorting, setSearchParams });
};

export const handleClickPage = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  updateParams({ clickedPage, sorting, setSearchParams });
};

export const handleClickNextBtn = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  const nextPage = clickedPage + 1;
  updateParams({ clickedPage: nextPage, sorting, setSearchParams });
};
