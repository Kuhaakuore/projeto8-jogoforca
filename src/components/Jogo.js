import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';
import { StyledJogo } from "./styles/Jogo.styled";
import palavras from "../palavras";


export default function Jogo({ gameState, setGameState, errorsCounter, setErrorsCounter, word, setWord, wordDisplay, setWordDisplay, playerStatus, setPlayerStatus, setChosenLetters}) {
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    
    function chooseWord() {
        if(gameState === "pre game") {
            setGameState("game in progress");
            word = palavras[Math.floor(Math.random()*palavras.length)];
            setWord(word);
            const wordArray = word.split("");
            for (let i = 0; i < wordArray.length; i++) wordDisplay.push(" _");
            setWordDisplay(wordDisplay);
        }
        if (gameState === "game in progress" || playerStatus.length > 0) {
            word = palavras[Math.floor(Math.random()*palavras.length)];
            setWord(word);
            setWordDisplay([]);
            const wordArray = word.split("");
            const newArray = [];
            for (let i = 0; i < wordArray.length; i++) newArray.push(" _");
            setWordDisplay(newArray);
            setErrorsCounter(0);
            setChosenLetters([]);
            setPlayerStatus("");
        }
        console.log(word);
    }

    return (
        <>
            <StyledJogo>
                <img src={images[errorsCounter]} />
                <button onClick={chooseWord}>Escolher Palavra</button>
                <div className={`word ${playerStatus}`}>{wordDisplay.join("")}</div>
            </StyledJogo>
        </>
    );
}