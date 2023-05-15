import '../css/reset.css';
import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from '../palavras';


export default function App() {
  return (
    <div className="App">
      <Jogo />
      <Letras />
    </div>
  );
}
