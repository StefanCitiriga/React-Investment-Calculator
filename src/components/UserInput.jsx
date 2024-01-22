import { useState } from "react";

const UserInput = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required onChange={(event) => handleChange('initialInvestment', event.target.value)} value={userInput.initialInvestment}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required onChange={(event) => handleChange('annualInvestment', event.target.value)} value={userInput.annualInvestment}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required onChange={(event) => handleChange('expectedReturn', event.target.value)} value={userInput.expectedReturn}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required onChange={(event) => handleChange('duration', event.target.value)} value={userInput.duration}/>
            </p>
        </div>
    </section>
}

export default UserInput;