import React, {useState} from 'react';
import Form from '../Components/Form';


const MortgageContainer = () => {

    const [mortgage, setMortgage] = useState(0);
    const [difference, setDifference] = useState(0);


    const mortgageOffer = (salary1, salary2, desiredMortgage) => {
        let combinedCount = salary1 + salary2;
        let multiplier = combinedCount * 3;
        console.log(multiplier);
        setMortgage(multiplier);
        let difference = desiredMortgage - multiplier;
        setDifference(difference); 
        

    }


    return (
        <>
       
        <Form onFormSubmit={mortgageOffer}/>
        <p>Your can afford to borrow: £{mortgage}</p>
        <p>The difference between your desired mortgage amount and the amount you are borrowing £{difference}</p>
        
        </>
        
    )
    
    }

export default MortgageContainer;