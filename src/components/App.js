import "../css/reset.css";
import Jogo from "./Jogo.js";
import Letras from "./Letras.js";
import Chute from "./Chute.js";
import { useState } from "react";

export default function App() {
  const [gameState, setGameState] = useState("pre game");
  const [errorsCounter, setErrorsCounter] = useState(0);
  const [word, setWord] = useState("");
  const [wordDisplay, setWordDisplay] = useState([]);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [playerStatus, setPlayerStatus] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <Jogo
        gameState={gameState}
        setGameState={setGameState}
        errorsCounter={errorsCounter}
        setErrorsCounter={setErrorsCounter}
        word={word}
        setWord={setWord}
        wordDisplay={wordDisplay}
        setWordDisplay={setWordDisplay}
        playerStatus={playerStatus}
        setPlayerStatus={setPlayerStatus}
        setChosenLetters={setChosenLetters}
        setInputText={setInputText}
      />
      <Letras
        gameState={gameState}
        setGameState={setGameState}
        errorsCounter={errorsCounter}
        setErrorsCounter={setErrorsCounter}
        word={word}
        wordDisplay={wordDisplay}
        setWordDisplay={setWordDisplay}
        chosenLetters={chosenLetters}
        setChosenLetters={setChosenLetters}
        setPlayerStatus={setPlayerStatus}
      />
      <Chute
        word={word}
        setWordDisplay={setWordDisplay}
        gameState={gameState}
        setGameState={setGameState}
        setPlayerStatus={setPlayerStatus}
        setErrorsCounter={setErrorsCounter}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}
