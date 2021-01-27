import  React, {useState} from 'react';

const Form = ({onFormSubmit}) => {

    const [desiredMortgage, setDesiredMortgage] = useState(0);
    const [salary1, setSalary1] = useState(0);
    const [salary2, setSalary2] = useState(0);

    const handleMortgageChange = (evt) => {
        setDesiredMortgage(evt.target.value);
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
        
        console.log(salary1, salary2, desiredMortgage);
        // if (!desiredMortgageToSubmit || !salary1ToSubmit || salary2ToSubmit){
        //     return
        // }



        // setDesiredMortgage("");
        // setSalary1("");
        // setSalary2("");

    }

    // <label htmlFor="desiredMortgage"
    //         >Desired Mortgage</label><input id="desiredMortgage"
    //             type="number"
    //             placeholder="Desired mortgage value"
    //             value={desiredMortgage}
    //             onChange={handleMortgageChange}
    //             />

    return (
        <form>
            
            <label htmlFor="salary1"> Salary 1</label>
            <input id="salary1"
                type="number"
                placeholder="Salary 1"
                value={salary1}
                onChange={handleSalary1Change}
                />
                <label htmlFor="salary2"> Salary 2</label>
            <input id="salary2"
                type="number"
                placeholder="Salary 2"
                value={salary2}
                onChange={handleSalary2Change}
                />
            <input 
                type="submit"
                value="Submit"
                onClick={handleFormSubmit}/>
                <p></p>
           
        </form> 
    )
    }

export default Form;