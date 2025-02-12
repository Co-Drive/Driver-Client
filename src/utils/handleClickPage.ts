import { SetURLSearchParams } from 'react-router-dom';

type clickedPageType = {
  clickedPage: number;
  setSearchParams: SetURLSearchParams;
};

export const handleClickPrevBtn = ({
  clickedPage,
  setSearchParams,
}: clickedPageType) => {
  const prevPage = (clickedPage - 1).toString();
  setSearchParams({ page: prevPage });
};

export const handleClickPage = ({
  clickedPage,
  setSearchParams,
}: clickedPageType) => {
  setSearchParams({ page: clickedPage.toString() });
};

export const handleClickNextBtn = ({
  clickedPage,
  setSearchParams,
}: clickedPageType) => {
  const nextPage = (clickedPage + 1).toString();
  setSearchParams({ page: nextPage });
};
