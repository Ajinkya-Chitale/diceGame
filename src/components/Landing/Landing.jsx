import React, { useContext } from 'react'
import Score from '../Score/Score'
import Button from '../Button/Button'
import Rules from '../Rules/Rules'
import { Context } from '../../Context'

const Landing = () => {
  // Access state from global context file
  const {ruleText, setRuleText} = useContext(Context);
  const {showRules, setShowRules} = useContext(Context);
  const {diceNumber, setDiceNumber} = useContext(Context);
  const {number, setNumber} = useContext(Context);
  const {setSelected} = useContext(Context);
  const {score, setScore} = useContext(Context);
  // const {same, setSame} = useContext(Context);

  // Function to show hide rules section
  const handleRules = () => {
    ruleText=="Show Rules" ? setRuleText('Hide Rules') : setRuleText('Show Rules');
    setShowRules(!showRules);
  }

  // Function to handle total score count
  const handleTotalScore = () => {
    (number === diceNumber) ? setScore((prev) => (Number(prev) + Number(diceNumber))) : setScore((prev) => (Number(prev) - 2));
  }

  // Function to handle change dice on click
  const handleImageChange = () => {
    if(number !== null) {
      let number = Math.ceil(Math.random()*6);
      setDiceNumber(number);
      handleTotalScore();
    }
    else {
      setSelected(false);
    }
    
    setNumber(null);
  }

  // Function to handle reset score
  const handleReset = () => {
    setScore(0);
  }

  return (
    <>
        <Score />

        <div className='flex flex-col items-center'>
            <button type='button' onClick={handleImageChange}>
              <img className='mb-2 w-2/4 m-auto sm:w-auto' value={diceNumber} src={`images/dice_${diceNumber}.svg`} alt="dice image" />
            </button>
            <h2 className='mb-4 sm:mb-6 font-medium text-lg sm:text-xl'>Click on Dice to roll</h2>
            <div className='flex flex-col gap-4'>
                <Button text="Reset Score" color="secondary" click={handleReset} />
                <Button text={ruleText} color="primary" click={handleRules} />
            </div>
        </div>

        {
          showRules ? <Rules /> : null
        }
    </>
  )
}

export default Landing
