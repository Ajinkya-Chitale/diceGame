import React, { useState } from 'react'

const Context = React.createContext();
const ContextProvider = ({ children }) => {
    // Use state to store the value of rules section
    const [ruleText, setRuleText] = useState('Show Rules');
    const [showRules, setShowRules] = useState(false);

    // Use State to store number value
    const [number, setNumber] = useState(null);

    // Use state to store the value on dice number
    const [diceNumber, setDiceNumber] = useState(1);

    // Use state to store the classname to show the error msg
    const [selected, setSelected] = useState(true);

    // Use state to store the value of score
    const [score, setScore] = useState(0);

    // Use state to Check the selected number and dice number is same or not
    const [same, setSame] = useState(false);

    return (
        <Context.Provider value={{ ruleText, setRuleText, showRules, setShowRules, number, setNumber, diceNumber, setDiceNumber, selected, setSelected, score, setScore, same, setSame }}>
            {children}
        </Context.Provider>
    )
}

export {Context};
export {ContextProvider};