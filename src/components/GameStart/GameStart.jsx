import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const GameStart = () => {
    const navigate = useNavigate();

    const handlePlayNow = () => {
        navigate('GameStarted');
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-center h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full'>
            <img className='w-4/5 sm:w-3/4 md:w-1/2 mx-auto md:mx-3 mb-8 sm:mb-0' src="images/dices.svg" alt="dices image" />
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-bold mb-4'>DICE GAME</h1>
                <Button text="Play Now" color="primary" click={handlePlayNow} />
            </div>
        </div>
    )
}

export default GameStart
