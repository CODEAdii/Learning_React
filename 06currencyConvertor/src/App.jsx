/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

//now we set our state whn we have passed
function App() {

 const [amount,setAmount]=useState(0)
 const [from,setFrom]=useState("usd")
 const [to,setTo]=useState("inr")
 const [convertedAmount,setConvertedAmount]=useState(0)

//hook used ;
 const currencyInfo= useCurrencyInfo(from)

//  fetch all the keys from object
 const options = Object.keys(currencyInfo)


//since we added swap btn in pour project in order to use --
//we simply swaping two variables i.e,to and from also setconverted and amount too

 const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

//this is the state which will display final result

// setConvertedAmount(amount*currencyInfo[to])-- in order to call this in button we use method so we call function
  const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div
    // Full-width and height screen, centered content, background image
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}
    >
    <div className="w-full">
        {/* Card for the form */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                // Prevent form submission for now
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                    // Add logic for form submission
                }}
            >
                {/* InputBox for 'From' currency */}
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setFrom(currency)} 
                        selectCurrency={from}
                        onAmountChange={(amount)=>setAmount(amount)}
                        // Additional InputBox props can be added here
                    />
                </div>
                {/* Swap button with a visual line */}
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        // Button styling for swap
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                         border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        // Add swap button functionality here
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                {/* InputBox for 'To' currency */}
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setTo(currency)}
                        selectCurrency={to}
                        amountDisable
                        // Additional InputBox props can be added here
                    />
                </div>
                {/* Convert button */}
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert{from.toUpperCase()} to {to .toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>

  )
}


export default App
