import { useMemo, useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import ThemeToggler from './components/ThemeToggler';
import ThemeContextProvider from './context/ThemeContextProvider';

function App() {
  const [amount, setAmount] = useState('0');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [fetched_currency_info] = useCurrencyInfo(from);
  console.log(fetched_currency_info)
  const currencyLists = useMemo(() => Object.keys(fetched_currency_info) || [], [fetched_currency_info]); //optimised

  // function which set's the amount for amount modification
  const onAmountChange = (changed_amount = 0) => {
    setAmount(changed_amount);
  }


  // function to calculate the currency conversion result
  const convert = () => {
    setConvertedAmount(amount * fetched_currency_info[to]);
  }

  // function to swap currency
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6595971/pexels-photo-6595971.jpeg)`,
      }}
    >
      <ThemeContextProvider>
        <ThemeToggler />
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-xs bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={onAmountChange}
                  currencyName={from}
                  onCurrencyChange={setFrom}
                  currencyLists={currencyLists}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white hover:bg-blue-700 duration-100 ease-initial active:bg-blue-600 cursor-pointer px-2 py-0.5"
                  aria-label='Swap currencies'
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyName={to}
                  onCurrencyChange={setTo}
                  currencyLists={currencyLists}
                  isDisabled
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 dark:bg-black text-white px-4 py-3 rounded-lg hover:bg-blue-700 duration-100 ease-initial active:bg-blue-600 cursor-pointer">
                Convert
              </button>
            </form>
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  )
}

export default App
