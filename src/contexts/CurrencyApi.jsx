import { createContext, useEffect, useState } from "react";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const URL="https://v6.exchangerate-api.com/v6/0374760746bd7fc5e89110cf/latest/"

    const [currencyData, setCurrencyData]=useState({});
    const [searchTerm, setSearchTerm]=useState("USD");
    
    const fetchCurrency=async(apiUrl)=>{

        try{
            const response=await fetch(apiUrl);
            if(!response.ok){
                throw new Error (`HTTP error! status: ${response.status}`)
            }
            const data=await response.json();

            if(data && data.conversion_rates){
                setCurrencyData(data.conversion_rates);
            }
          }catch(error){
            console.log( "Error fetching currencies:",error)
            setCurrencyData({});
          }
    }

    useEffect(()=>{
        const correctURL=`${URL}${searchTerm}`;
        fetchCurrency(correctURL);
    },[searchTerm]);

    return(
        <DataContext.Provider value={{currencyData,searchTerm, setSearchTerm}}>
            {children}
        </DataContext.Provider>
    );
};


