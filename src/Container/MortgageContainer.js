import React, {useState} from 'react';
import Form from '../Components/Form';


const MortgageContainer = () => {

    const [mortgage, setMortgage] = useState(0);


    const mortgageOffer = (salary1, salary2) => {
        let combinedCount = salary1 + salary2;
        let multiplier = combinedCount * 3;
        console.log(multiplier);
        setMortgage(multiplier);
        

    }


    return (
        <>
        <p>Your can borrow: £{mortgage}</p>
        
        <Form onFormSubmit={mortgageOffer}/>
        </>
        
    )
    
    }

export default MortgageContainer;