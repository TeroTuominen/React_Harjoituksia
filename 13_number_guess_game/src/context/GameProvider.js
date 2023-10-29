import {useState} from 'react';
import GameContext from './GameContext';
import { useNavigate } from 'react-router-dom';

const GameProvider = (props) => {

    const [state, setState] = useState({
        playerName: '',
        targetNumber: 0,
        noOfGuesses: 0,
        minimumGuess: 1,
        maximumGuess: 100,
        message: '',
    });
    const navigate = useNavigate();

    const startGame = (playerName) => {
        if(!name) {
            setState({
                ...state,
                message: 'Please enter your name',
            });
            return;
        }
        const target = Math.floor(Math.random() * 100) + 1;
        const message = `Hi ${name}. Guess the number between "+state.minimumGuess+" and "+state.maximumGuess+"`;
        setState((state)=>{
            return {
                ...state,
                playerName: name,
                targetNumber: target,
                message: message,
            }
        })
        navigate('/game');
    }

    const guess = (guess) => {
        if(targetNumber === 0) {
            setState({
                targetNumber: 0,
                playerName: '',
                noOfGuesses: 0,
                minimumGuess: 1,
                maximumGuess: 100,
                message: '',
            })
            navigate('/');
            if(isNaN(guess)) {
                let message = 'Please enter a valid number'+state.minimumGuess+' and '+state.maximumGuess;
                setState((state)=>{
                    return {
                        ...state,
                        message: message,
                    }
                })
                return;
            }
            let tempGuess = parseInt(guess);
            if(tempGuess < state.minimumGuess || tempGuess > state.maximumGuess) {
                let message = 'Please enter a number between '+state.minimumGuess+' and '+state.maximumGuess;
                setState((state)=>{
                    return {
                        ...state,
                        noOfGuesses: state.noOfGuesses + 1,
                        minimumGuess: Guess,
                        message: message,
                    }
                })
                return;
            }

            if(tempGuess < state.targetNumber && tempGuess >= state.minimumGuess) {
                let message = 'Your guess is too low. Guess between "+guess" and "+state.maximumGuess'
                setState((state)=>{
                    return {
                        ...state,
                        noOfGuesses: state.noOfGuesses + 1,
                        minimumGuess: Guess,
                        message: message,
                    }
                })

            if(tempGuess > state.targetNumber && tempGuess <= state.maximumGuess) {
                let message = 'Your guess is too high. Guess between "+state.minimumGuess+" and "+guess'
                setState((state)=>{
                    return {
                        ...state,
                        noOfGuesses: state.noOfGuesses + 1,
                        maximumGuess: Guess,
                        message: message,
                    }
                })
                return;
            }
            if(tempGuess === state.targetNumber) {
                let noOfGuesses = state.noOfGuesses + 1;
                let message = 'Congratulations! You guessed the number in "+state.noOfGuesses+" guesses';
                setState({
                    playerName: '',
                    noOfGuesses: 0,
                    targetNumber: 0,
                    minimumGuess: 1,
                    maximumGuess: 100,
                    message: '',
                })
                navigate('/');
                return;
            }
            console.log("Should not be here")

    return (
        <GameContext.Provider value={{
            startGame: startGame,
            guess: guess,
            message: state.message,
        }}>
            {props.children}
        </GameContext.Provider>
    )
}
export default GameProvider;