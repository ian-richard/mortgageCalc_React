import React, {useState} from 'react';
import Form from '../Components/Form';


const MortgageContainer = ({salary1, salary2}) => {

    const [mortgage, setMortgage] = useState(0);


    const mortgageOffer = () => {
        let combinedCount = salary1 + salary2;
        let multiplier = combinedCount * 3;
        console.log(multiplier);
        setMortgage(multiplier);
        

    }


    return (
        <>
        <p>Your can borrow: £{mortgage}</p>
        
        <Form handleFormSubmit={mortgageOffer}/>
        </>
        
    )
    
    }

export default MortgageContainer;