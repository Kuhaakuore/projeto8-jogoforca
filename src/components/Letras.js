import { StyledLetras } from "./styles/Letras.styled";

export default function Letras({ gameState, setGameState }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    return (
        <>
            <StyledLetras>
                {alfabeto.map(letra =>
                    (gameState === "pre game") ? 
                    <button type="button" key={letra} disabled>{letra.toUpperCase()}</button> : 
                    <button type="button" key={letra} className="enabled">{letra.toUpperCase()}</button>)}
            </StyledLetras>
        </>
    );
}