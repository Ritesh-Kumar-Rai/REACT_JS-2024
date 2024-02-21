import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  
  const [data, setdata] = useState({});

  useEffect(() => {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
      console.log(
        this.readyState + " " + this.status,
        JSON.parse(this.responseText)
      );
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        setdata(response["rates"]);
      }
    };

    xhttp.open("GET", `https://api.exchangerate-api.com/v4/latest/${currency}`, true);
    xhttp.send();
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
