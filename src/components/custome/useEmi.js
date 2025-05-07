import { useState } from "react";

const useEMI=()=>{
    const [emi, setEmi]= useState(null);
    const [schedule, setSchedule]= useState([]);

    const calculateEMI=(principle, rate, tenure)=>{
        if(!principle || !rate || !tenure)return;

        const P = parseFloat(principle);
        const R = parseFloat(rate) / 12 / 100; // Monthly interest paid
        const N = parseInt(tenure)*12; //converts years to months
       

        const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

        setEmi(emiValue.toFixed(2));

        let balance=P;
        let scheduleData=[];

        for(let i=1;i<=N;i++){
            const interestPaid=balance*R;
            const principalPaid=emiValue- interestPaid;
            balance =balance-principalPaid;

            scheduleData.push({
                month:i,
                emi:emiValue.toFixed(2),
                interestPaid:interestPaid.toFixed(2),
                principalPaid:principalPaid.toFixed(2),
                remainingBalance:balance.toFixed(2),
            })
        }
        setSchedule(scheduleData);
    };
    return {emi, calculateEMI, schedule, setSchedule, setEmi};
}

export default useEMI;