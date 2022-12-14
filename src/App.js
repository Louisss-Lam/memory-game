import Background from './components/Background';
import Settings from './components/Settings/Settings';
import { useState } from 'react';

import useGetImages from './hooks/useGetImages';

function App() {
    const [gameOptions, setGameOptions] = useState(null);
    const images = useGetImages(gameOptions);

    console.log(images);

    const startGame = (options) => {
        setGameOptions(options);
    };
    return (
        <>
            <Background />
            <h1>Memory Game</h1>
            <Settings startGame={startGame} />
        </>
    );
}

export default App;
