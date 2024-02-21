import { useState } from 'react';
import useCurrencyInfo from './custom_hooks/useCurrencyInfo';
import { InputBox } from './components';


function App() {

  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("INR");
  const [from, setFrom] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const response = useCurrencyInfo(from);
  const currencyOptions = Object.keys(response);

  // function to convert currency amount (e.g : INR to USD)
  const convert = () =>{
      setConvertedAmount(amount * response[to]);
      console.log(convertedAmount);
  }

  // function to swap between From and To/ amount and convertedamount 
  const swap = () =>{
      setFrom(to);
      setTo(from);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
  }

  return (
    <>
       <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://th.bing.com/th/id/OIP.x3MeYBAGaBhkUs5CAGuh7QAAAA?rs=1&pid=ImgDetMain')`,
                backgroundPosition: "cover"
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                        <InputBox label="From" currency={from} OnCurrencyChange={(e)=>{ setFrom(e.target.value)}} currencyOptions={currencyOptions} amount={amount} OnAmountChange={(e)=>{ setAmount(e.target.value)}} />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                        <InputBox label="To" currency={to} OnCurrencyChange={(e)=> setTo(e.target.value)} currencyOptions={currencyOptions} amount={amount} OnAmountChange={(e)=> setAmount(e.target.value)} convertedAmount={convertedAmount}/>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                            Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      
     
    </>
  )
}

export default App
