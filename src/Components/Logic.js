import  React, {useState} from 'react';
import Form from './Form';

const Logic = ({salary1, salary2, desiredMortgage}) => {

    const [mortgage, setMortgage] = useState(0);

    const getMortgage = () => {
        setMortgage(combinedSalary - desiredMortgage);
    }

    const combinedSalary = () => {
        let combinedNum = salary1 + salary2;
    }

    const mortgageOffer = () => {
        let newAmount = combinedSalary * 3;

        if(newAmount >mortgage){
            return "Proceed";
        }
        else
            return "Not eligible";
    }

    return (
        <>
        <p>Logic component</p>
        <Form/>
        </>
        
    )
    }

export default Logic;