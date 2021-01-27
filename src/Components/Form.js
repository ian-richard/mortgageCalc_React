import  React, {useState} from 'react';

const Form = ({onFormSubmit}) => {

    const [desiredMortgage, setDesiredMortgage] = useState(0);
    const [salary1, setSalary1] = useState(0);
    const [salary2, setSalary2] = useState(0);

    const handleMortgageChange = (evt) => {
        setDesiredMortgage(evt.target.value);
    }

    const handleSalary1Change = (evt) => {
        setSalary1(evt.target.value);
    }

    const handleSalary2Change = (evt) => {
        setSalary2(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const desiredMortgageToSubmit = desiredMortgage.trim();
        const salary1ToSubmit = salary1.trim();
        const salary2ToSubmit = salary2.trim();
        if (!desiredMortgageToSubmit || !salary1ToSubmit || salary2ToSubmit){
            return
        }

        onFormSubmit({
            desiredMortgage: desiredMortgageToSubmit,
            salary1: salary1ToSubmit,
            salary2: salary2ToSubmit
        });

        setDesiredMortgage(0);
        setSalary1(0);
        setSalary2(0);

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                placeholder="Desired mortgage value"
                value={desiredMortgage}
                onChange={handleMortgageChange}
                />
            <input
                type="text"
                placeholder="Salary 1"
                value={salary1}
                onChange={handleSalary1Change}
                />
            <input
                type="text"
                placeholder="Salary 2"
                value={salary2}
                onChange={handleSalary2Change}
                />
            <input
                type="submit"
                value="Post"
                />
        </form> 
    )
    }

export default Form;