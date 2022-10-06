const getYesterday = () => {
  const today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  yesterday = yesterday.toJSON().slice(0, 10);
  return yesterday;
};

const groupedDaily = async () => {
  let data;
  let error = "";
  const response = await fetch(
    `https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/${getYesterday()}?adjusted=true&apiKey=PeWHlEcjh_T7PvDn5briSyXfXNyjqe28`
  );

  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    data = JSON.parse(jsonResponse.results);
  } else {
    // Handle errors
    error = response.statusText;
  }
  return { data, error };
};

const filterCoin = (data, tickerSymbol) => {
  const coinInfo = data.filter((x) => x.T === tickerSymbol);
  return coinInfo;
};

const updateInfo = (id) => {
  const data = groupedDaily();
  const coinInfo = filterCoin(data, id);

  const openPrice = document.querySelector(".open-price");
  openPrice.textContent = coinInfo.o;

  const closePrice = document.querySelector(".close-price");
  closePrice.textContent = coinInfo.c;

  const highPrice = document.querySelector(".high-price");
  highPrice.textContent = coinInfo.h;

  const lowPrice = document.querySelector(".low-price");
  lowPrice.textContent = coinInfo.l;
};
