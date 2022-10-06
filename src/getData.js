const getYesterday = () => {
  const today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  yesterday = yesterday.toJSON().slice(0, 10);
  return yesterday;
};

let firstData;

const groupedDaily = async () => {
  let error = "";
  if (firstData) return { data: firstData, error };
  const response = await fetch(
    `https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/${getYesterday()}?adjusted=true&apiKey=PeWHlEcjh_T7PvDn5briSyXfXNyjqe28`
  );

  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    firstData = jsonResponse.results;
  } else {
    // Handle errors
    error = response.statusText;
  }
  return { data: firstData, error };
};

const filterCoin = (data, tickerSymbol) => {
  const coinInfo = data.filter((x) => x.T === tickerSymbol);
  return coinInfo;
};

const switchLoading = () => {
  const loading = document.querySelector(".loading");
  loading.classList.toggle("loaded");
};

const updateInfo = async (id) => {
  const { data } = await groupedDaily();
  const coinInfo = filterCoin(data, id)[0];

  const openPrice = document.querySelector(".open-price>.value");
  openPrice.textContent = coinInfo.o;

  const closePrice = document.querySelector(".close-price>.value");
  closePrice.textContent = coinInfo.c;

  const highPrice = document.querySelector(".high-price>.value");
  highPrice.textContent = coinInfo.h;

  const lowPrice = document.querySelector(".low-price>.value");
  lowPrice.textContent = coinInfo.l;

  switchLoading();
};

export { updateInfo, switchLoading };
