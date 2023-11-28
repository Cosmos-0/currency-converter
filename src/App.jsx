
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize conversion rate to 0
    setConversionRate(0);
    setError("");

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.rates && data.rates[toCurrency]) {
          setConversionRate(data.rates[toCurrency]);
        } else {
          setError("Error fetching conversion rate.");
        }
      })
      .catch((err) => {
        setError("Failed to fetch data. Please try again later.");
      });
  }, [fromCurrency, toCurrency]);

  const convert = () => {
    if (conversionRate !== 0) {
      setConvertedAmount(amount * conversionRate);
    }
  };

  return (
    <div className="App p-5">
      <div className="max-w-sm mx-auto">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          {/* Add more currency options here */}
          <option value="USD">USD</option>
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BDT">BDT</option>
          <option value="BRL">BRL</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="HUF">HUF</option>
          <option value="HKD">HKD</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="KES">KES</option>
          <option value="KRW">KRW</option>
          <option value="LKR">LKR</option>
          <option value="MAD">MAD</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NGN">NGN</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
        </select>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          {/* Add more currency options here */}
          <option value="USD">USD</option>
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BDT">BDT</option>
          <option value="BRL">BRL</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="HUF">HUF</option>
          <option value="HKD">HKD</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="KES">KES</option>
          <option value="KRW">KRW</option>
          <option value="LKR">LKR</option>
          <option value="MAD">MAD</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NGN">NGN</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
        </select>

        <button onClick={convert} className="bg-blue-500 text-white p-2 w-full">
          Convert
        </button>
        {conversionRate !== 0 && (
          <div className="mt-4">
            <p>
              Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

