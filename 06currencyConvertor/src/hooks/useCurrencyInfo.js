import {useEffect,useState} from "react"




function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    //here we put empty object in state hook ,incase if there is no fetch call atleast it will rnder an empty object
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);

    },[currency])//[]--this is depedency array because evry time i put value in currency it will chnge i.e it will call evrytime
    console.log(data);
    return data
}



export default useCurrencyInfo;