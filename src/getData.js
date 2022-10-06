const getYesterday = () => {
  const today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  yesterday = yesterday.toJSON().slice(0, 10);
  return yesterday;
};
