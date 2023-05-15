import "../css/reset.css";
import Jogo from "./Jogo.js";
import Letras from "./Letras.js";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {
  const [gameState, setGameState] = useState("pre game");
  const [errorsCounter, setErrorsCounter] = useState(0);
  const [word, setWord] = useState("");
  const [wordDisplay, setWordDisplay] = useState("");

  return (
    <div className="App">
      <Jogo
        gameState={gameState}
        setGameState={setGameState}
        errorsCounter={errorsCounter}
        setWord={setWord}
        wordDisplay={wordDisplay}
        setWordDisplay={setWordDisplay}
      />
      <Letras
        gameState={gameState}
        setGameState={setGameState}
        errorsCounter={errorsCounter}
        setErrorsCounter={setErrorsCounter}
      />
    </div>
  );
}
