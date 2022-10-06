const getYesterday = () => {
  const today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  yesterday = yesterday.toJSON().slice(0, 10);
  return yesterday;
};

const groupedDaily = async () => {
  const response = await fetch(
    `https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/${getYesterday()}?adjusted=true&apiKey=PeWHlEcjh_T7PvDn5briSyXfXNyjqe28`
  );

  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } else {
    // Handle errors
    console.log(response.status, response.statusText);
  }
};

const filterCoin = (data, tickerSymbol) => {
  const coinInfo = data.filter((x) => x.T === tickerSymbol);
  return coinInfo;
};
