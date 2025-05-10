import { createContext, useEffect, useState } from "react";

export const DataContext=createContext();

export const DataProvider=({children})=>{
    const URL="https://v6.exchangerate-api.com/v6/0374760746bd7fc5e89110cf/latest/"

    const [currencyData, setCurrencyData]=useState({});
    const [searchTerm, setSearchTerm]=useState("USD");
    const [loading, setLoading]=useState(false);
    const [isError, setIsError]=useState({status:false,msg:""})
    
    const fetchCurrency=async(apiUrl)=>{
            setLoading(true);
            setIsError({status:false,msg:""})
        try{
            const response=await fetch(apiUrl);
            if(!response.ok){
                
                if(response.status===404){
                throw new Error ("Data not Found")
            }
            throw new Error("Something went wrong, please try again!");
        }
           
            const data=await response.json();
            if(data && data.conversion_rates){
                setCurrencyData(data.conversion_rates);
            }
            setLoading(false);
            setIsError({status:false,msg:""})

            
        }catch(error){
              setLoading(false);
              setIsError({status:true,
                msg:error.message || "Something went Wrong, Please try again!"
              })
            setCurrencyData({});
          }
    }

    useEffect(()=>{
        if(!searchTerm)return;
        const correctURL=`${URL}${searchTerm}`;
        fetchCurrency(correctURL);
    },[searchTerm]);

    return(
        <>
        
        <DataContext.Provider value={{currencyData,searchTerm, setSearchTerm,loading, isError}}>
            {children}
        </DataContext.Provider>
        </>
    );
};


