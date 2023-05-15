import { useState } from "react";
import { StyledLetras } from "./styles/Letras.styled";

export default function Letras({
  gameState,
  setGameState,
  errorsCounter,
  setErrorsCounter,
  word,
  wordDisplay,
  setWordDisplay,
  chosenLetters,
  setChosenLetters,
  setPlayerStatus,
}) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function chooseLetter(letter) {
    const newWordArray = [...wordDisplay];
    if (!chosenLetters.includes(letter)) {
      const newArray = [...chosenLetters, letter];
      setChosenLetters(newArray);
      for (let i = 0; i < word.length; i++) {
        if (letter.normalize() === word[i].normalize())
          newWordArray[i] = letter;
      }
      setWordDisplay(newWordArray);
      if (!newWordArray.includes(" _")) {
        console.log(newWordArray);
        setGameState("pre game");
        setPlayerStatus("won");
      }
    }
    if (!word.includes(letter)) {
      setErrorsCounter(errorsCounter + 1);
      if (errorsCounter + 1 === 6) {
        setGameState("pre game");
        for (let i = 0; i < word.length; i++) {
          newWordArray[i] = word[i];
        }
        setWordDisplay(newWordArray);
        setPlayerStatus("lost");
      }
    }
  }

  return (
    <>
      <StyledLetras>
        {alfabeto.map((letra) =>
          gameState === "pre game" ? (
            <button type="button" key={letra} disabled>
              {letra.toUpperCase()}
            </button>
          ) : (
            <button
              type="button"
              key={letra}
              className={chosenLetters.includes(letra) ? "" : "enabled"}
              disabled={chosenLetters.includes(letra) ? true : false}
              onClick={() => chooseLetter(letra)}
            >
              {letra.toUpperCase()}
            </button>
          )
        )}
      </StyledLetras>
    </>
  );
}
