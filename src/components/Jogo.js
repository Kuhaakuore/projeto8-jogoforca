import forca0 from '../assets/img/forca0.png';
import forca1 from '../assets/img/forca1.png';
import forca2 from '../assets/img/forca2.png';
import forca3 from '../assets/img/forca3.png';
import forca4 from '../assets/img/forca4.png';
import forca5 from '../assets/img/forca5.png';
import forca6 from '../assets/img/forca6.png';
import { StyledJogo } from "./styles/Jogo.styled";
import palavras from "../palavras";


export default function Jogo({ gameState, setGameState, errorsCounter, setWord, wordDisplay, setWordDisplay}) {
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
    const word = palavras[Math.floor(Math.random()*palavras.length)];
    const wordArray = word.split("");

    function chooseWord() {
        if(gameState === "pre game") {
            setGameState("game in progress");
            setWord(word);
        }
        for (let i = 0; i < wordArray.length; i++) {
            if (i !== wordArray.length - 1) wordDisplay += "_ ";
            else wordDisplay += "_";
        }
        setWordDisplay(wordDisplay);
    }

    return (
        <>
            <StyledJogo>
                <img src={images[errorsCounter]} />
                <button onClick={chooseWord}>Escolher Palavra</button>
                <div className='word'>{wordDisplay}</div>
            </StyledJogo>
        </>
    );
}