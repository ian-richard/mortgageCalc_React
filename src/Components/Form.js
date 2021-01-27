import  React, {useState} from 'react';

const Form = ({onFormSubmit}) => {

    const [desiredMortgage, setDesiredMortgage] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [salary1, setSalary1] = useState(0);
    const [salary2, setSalary2] = useState(0);

    const handleMortgageChange = (evt) => {
        const newNum = parseInt(evt.target.value);
        setDesiredMortgage(newNum);
    }

    const handleDepositChange = (evt) => {
        const newNum = parseInt(evt.target.value);
        setDeposit(newNum);
    }

    const handleSalary1Change = (evt) => {
        const num1 = parseInt(evt.target.value);
        setSalary1(num1);
    }

    const handleSalary2Change = (evt) => {
        const num2 = parseInt(evt.target.value);
        setSalary2(num2);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onFormSubmit(salary1, salary2, desiredMortgage, deposit);
        
        console.log(salary1, salary2);
        if (!desiredMortgage || !salary1 || !salary2) {
            return
        }



        // setDesiredMortgage("");
        // setSalary1("");
        // setSalary2("");

    }



    return (
        <form>
            <label htmlFor="desiredMortgage"
            >Desired Mortgage: </label><input id="desiredMortgage"
                type="number"
                placeholder="Desired mortgage value"
                value={desiredMortgage}
                onChange={handleMortgageChange}
                />
            <label htmlFor="deposit"
            >Deposit: </label><input id="deposit"
                type="number"
                placeholder="Deposit"
                value={deposit}
                onChange={handleDepositChange}
                />
            <label htmlFor="salary1"> Salary 1: </label>
            <input id="salary1"
                type="number"
                placeholder="Salary 1"
                value={salary1}
                onChange={handleSalary1Change}
                />
                <label htmlFor="salary2"> Salary 2: </label>
            <input id="salary2"
                type="number"
                placeholder="Salary 2"
                value={salary2}
                onChange={handleSalary2Change}
                /><p></p>
            <input 
                type="submit"
                value="Submit"
                onClick={handleFormSubmit}/>
                <p></p>
           
        </form> 
    )
    }

export default Form;