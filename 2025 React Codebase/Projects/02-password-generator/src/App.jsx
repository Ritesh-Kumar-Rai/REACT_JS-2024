import { useCallback, useEffect, useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { TbCopyCheckFilled } from "react-icons/tb";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [length, setLength] = useState(5);
  const [isNumeric, setIsNumeric] = useState(false);
  const [isSpecialSymb, setIsSpecialSymb] = useState(false);
  const [password, setPassword] = useState('');
  const passwordInputElementRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const html = document.querySelector("html");

  // function for theme toggling
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  // function which generates password
  const generatePassword = useCallback(() => {
    let generated_password = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumeric) str += "0123456789";
    if (isSpecialSymb) str += "!@#$`%^&*-=+/";

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length);
      generated_password += str.charAt(index);
    }

    setPassword(generated_password); // update the password state

  }, [length, isNumeric, isSpecialSymb, setPassword]);


  // function for copy to clipboard
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordInputElementRef.current?.select();
    setIsCopied(prev => !prev);

    setTimeout(() => {
      setIsCopied(prev => !prev);
    }, 2000);
  };

  // useEffect for theme toggling
  useEffect(() => {
    if (darkTheme) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  }, [darkTheme]);

  // useEffect for password generation

  useEffect(() => {
    generatePassword();
  }, [length, isNumeric, isSpecialSymb, generatePassword]);

  return (
    <>
      <nav>
        <button type="button" onClick={toggleTheme}>
          Toggle Theme ({darkTheme ? "Dark" : "Light"})
        </button>
      </nav>

      <div className="container">
        <h1>Password Generator</h1>
        <div className="flex align-center justify-between my-2">
          <input
            type="text"
            className="form-control"
            placeholder="password generates here.."
            value={password}
            ref={passwordInputElementRef}
            readOnly
          />
          <button type="button" onClick={copyToClipboard}>
            {!isCopied ? <MdContentCopy /> : <TbCopyCheckFilled color="green" size="1em" />}
          </button>
        </div>
        <div className="my-2 flex align-center   justify-center gap-20px">
          <div className="flex align-center">
            <input type="range" id="range-input" min={0} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="range-input">Length ({length})</label>
          </div>
          <div>
            <input type="checkbox" id="numeric-input-checkbox" defaultChecked={isNumeric} onChange={() => {
              setIsNumeric(prev => !prev);
            }} />

            <label htmlFor="numeric-input-checkbox">Numeric</label>
          </div>
          <div>
            <input type="checkbox" id="symbol-type-checkbox" defaultChecked={isSpecialSymb} onChange={() => {
              setIsSpecialSymb(prev => !prev);
            }} />
            <label htmlFor="symbol-type-checkbox">Special Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
