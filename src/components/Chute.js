import { useState } from "react";
import { StyledChute } from "./styles/Chute.styled";

export default function Chute({
  word,
  setWordDisplay,
  gameState,
  setGameState,
  setPlayerStatus,
  setErrorsCounter,
}) {
  const [inputText, setInputText] = useState("");

  function guessAnswer() {
    if (inputText.length > 0) {
      const newWordArray = [];
      const normalizezWord = word
        .toLowerCase();
      const normalizedAswer = inputText
        .toLowerCase();
      if (normalizezWord === normalizedAswer) {
        setGameState("pre game");
        for (let i = 0; i < word.length; i++) {
          newWordArray[i] = word[i];
        }
        setWordDisplay(newWordArray);
        setPlayerStatus("won");
      } else {
        setGameState("pre game");
        for (let i = 0; i < word.length; i++) {
          newWordArray[i] = word[i];
        }
        setErrorsCounter(6);
        setWordDisplay(newWordArray);
        setPlayerStatus("lost");
      }
    }
    setInputText("");
  }

  return (
    <>
      <StyledChute>
        <span>Já sei a palavra!</span>
        <input
          onChange={(event) => setInputText(event.target.value)}
          disabled={gameState === "pre game" ? true : false}
          value={inputText}
          data-test="guess-input"
        ></input>
        <button
          type="button"
          disabled={gameState === "pre game" ? true : false}
          onClick={guessAnswer}
          data-test="guess-button"
        >
          Chutar
        </button>
      </StyledChute>
    </>
  );
}
