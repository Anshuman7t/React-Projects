import { useState } from 'react';
import { FirstPage } from './components/FirstPage';
import { GamePlay } from './components/GamePlay';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <FirstPage toggle={toggleGame} />}
    </div>
  )
}

export default App
