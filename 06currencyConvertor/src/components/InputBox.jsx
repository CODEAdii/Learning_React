/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from 'react';
//The component disables prop type checking and avoids warnings for unused variables.


// Function component named InputBox
//It takes several props (label, amount, onAmountChange, etc.) for customization.
//Default values are provided for some props (currencyOptions, selectCurrency, etc.).
// note: fn declaration--function myFunction(here we define our props) 
//   { here is the function body
    //// console.log("Hello, World!");
//   }
function InputBox({
                      label,
                      amount,
                      onAmountChange,
                      onCurrencyChange,
                      currencyOptions = [],
                      selectCurrency = "usd",
                      amountDisable = false,
                      currencyDisable = false,
                      className = "",})
  {

  // Generating a unique ID using useId() from React
  //It uses the useId hook to generate a unique ID (amountInputId). 
  //This ID is typically used for associating labels with input fields.
  const amountInputId = useId()



  // The return statement defines what the component renders{JSX Rendering:} 
  return (
  
  <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>


   {/*This section represents the input field for entering an amount.
      It includes a label associated with the amount input.
      The input field has various attributes, such as disabled and onChange event handling. */}

      <div className="w-1/2">
        
        {/* Label for the input field */}
        
        <label htmlFor={amountInputId} 
         className="text-black/40 mb-2 inline-block">
           {label}
        </label>

        {/* Input field for entering an amount */}
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* This section creates a flexible and styled dropdown for selecting a currency. */}
      
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        {/* Paragraph displaying information about Currency Type */}
      
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        {/* Dropdown (select) for choosing a currency */}
      
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/*When using loops in React, remember to keep the key in mind
           for improve performance of loop */}
          {/* Looping through currencyOptions to generate options */}
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
      {/*The closing div marks the end of the JSX structure.
      The component is ready to be used and will render based on the provided props. */}
    </div>
  );


}

// Exporting the InputBox component as the default export
export default InputBox;




