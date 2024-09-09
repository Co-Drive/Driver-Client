const updateStartDate = (today: Date) => {
  let day = today.getDay();
  let startDate;
  let resultDate;

  if (day === 0) day = 6;
  else day -= 1;

  resultDate = today.getDate() - day;
  startDate = new Date(today.setDate(resultDate));
  startDate = startDate
    .toLocaleDateString()
    .split('.')
    .filter((date) => date.length !== 0)
    .slice(1);

  return startDate.join('').trim();
};

const updateEndDate = (today: Date) => {
  let day = today.getDay();
  let endDate;
  let resultDate;

  if (day === 0) day = 6;

  resultDate = today.getDate() - day;
  endDate = new Date(today.setDate(resultDate + 7));

  if (day < 0) endDate.setMonth(endDate.getMonth() + 1);

  endDate = endDate
    .toLocaleDateString()
    .split('.')
    .filter((date) => date.length !== 0)
    .slice(2);

  return endDate.join();
};

export const updateWeek = () => {
  const currentDate = new Date();
  const today = new Date(currentDate.setHours(0, 0, 0, 0));

  return { startDate: updateStartDate(today), endDate: updateEndDate(today) };
};
