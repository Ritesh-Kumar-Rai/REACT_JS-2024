// This custom is created for fetching currencies information from API and return those info.

import { useEffect, useState } from "react";

const useCurrencyInfo = (currency_name = 'inr') => {
    const [currencyList, setCurrencyList] = useState({});
    const api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency_name}.json`;

    useEffect(()=>{
        const controller = new AbortController();

        fetch(api_url, {signal: controller.signal})
        .then((response)=> response.json())
        .then((res) => {
            res[currency_name] && setCurrencyList(res[currency_name]);
        })
        .catch((error) => console.error(`Error: ${error.name} -> ${error.message}`));

        return () => controller.abort(); // cleanup
        
    },[currency_name]);
    console.warn({currencyList})
    return [currencyList];
};

export default useCurrencyInfo;