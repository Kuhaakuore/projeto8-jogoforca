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
    if (!chosenLetters.includes(letter)) {
      const newArray = [...chosenLetters, letter];
      setChosenLetters(newArray);
      const newWordArray = [...wordDisplay];
      for (let i = 0; i < word.length; i++) {
        if (letter.normalize() === word[i].normalize()) newWordArray[i] = letter;
      }
      setWordDisplay(newWordArray);
    }
    if (!word.includes(letter)) setErrorsCounter(errorsCounter + 1);
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
