import { SetURLSearchParams } from 'react-router-dom';

type clickedPageType = {
  clickedPage: number;
  sorting: string;
  setSearchParams: SetURLSearchParams;
};

export const handleClickPrevBtn = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  const prevPage = (clickedPage - 1).toString();

  sorting === null
    ? setSearchParams({ page: prevPage })
    : setSearchParams({ page: prevPage, sort: sorting });
};

export const handleClickPage = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  const page = clickedPage.toString();
  sorting === null
    ? setSearchParams({ page })
    : setSearchParams({ page, sort: sorting });
};

export const handleClickNextBtn = ({
  clickedPage,
  sorting,
  setSearchParams,
}: clickedPageType) => {
  const nextPage = (clickedPage + 1).toString();
  sorting === null
    ? setSearchParams({ page: nextPage })
    : setSearchParams({ page: nextPage, sort: sorting });
};
