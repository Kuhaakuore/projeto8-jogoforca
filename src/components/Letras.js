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
    const normalizezWord = word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (!chosenLetters.includes(letter)) {
      const newArray = [...chosenLetters, letter];
      setChosenLetters(newArray);
      for (let i = 0; i < word.length; i++) {
        if (letter.normalize() === normalizezWord[i]) newWordArray[i] = word[i];
      }
      setWordDisplay(newWordArray);
      if (!newWordArray.includes(" _")) {
        setGameState("pre game");
        setPlayerStatus("won");
      }
    }
    if (!normalizezWord.includes(letter)) {
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
            <button type="button" key={letra} disabled data-test="letter">
              {letra.toUpperCase()}
            </button>
          ) : (
            <button
              type="button"
              key={letra}
              className={chosenLetters.includes(letra) ? "" : "enabled"}
              disabled={chosenLetters.includes(letra) ? true : false}
              onClick={() => chooseLetter(letra)}
              data-test="letter"
            >
              {letra.toUpperCase()}
            </button>
          )
        )}
      </StyledLetras>
    </>
  );
}
