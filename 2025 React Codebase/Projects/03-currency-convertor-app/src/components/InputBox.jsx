import { useId } from "react";

function InputBox({
    label = "From",
    amount = 0,
    onAmountChange,
    currencyName = 'inr',
    onCurrencyChange,
    currencyLists = ['inr'],
    className = "",
    isDisabled = false
}) {

    // we are using useId() for random unique id which we will use for label-input binding
    const labelID = useId();

    return (
        <div className={`bg-white dark:bg-cyan-950 dark:text-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={labelID} className="text-black/40 dark:text-white mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={labelID}
                    type="number"
                    className="outline-none w-full bg-transparent py-1.5"
                    value={amount}
                    min={0}
                    placeholder="Amount"
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={isDisabled}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 dark:text-white mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 dark:bg-zinc-900 cursor-pointer outline-none"
                    value={currencyName} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyLists.map((each_currency_name) => (
                        <option key={each_currency_name} value={each_currency_name}>
                            {each_currency_name}
                        </option>
                    ))}


                </select>
            </div>
        </div>
    );
}

export default InputBox;
