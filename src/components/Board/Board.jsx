import React from 'react';
import PropTypes from 'prop-types';
import Loader from "./../Loader";
import Card from "./../Card";
import Result from './../Result';

import styles from './Board.module.css';
import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';
import { useState } from 'react';
import { useEffect } from 'react';

const Board = ({ gameOptions, restartGame }) => {
    const [isLoading, setIsLoading] = useState(true);
    const images = useGetImages(gameOptions);
    const { cards, onCardClick, isWin } = useGameLogic(images, gameOptions.pace);

    useEffect(() => {
        if (images.length > 0) setIsLoading(false);
    }, [images]);

    return (
        <div>
            {isWin && <Result restartGame={restartGame} />}
            {isLoading ? (
                <Loader />
            ) : (
                <div className={`${styles.board}`}>
                    {cards.map(card => (
                        <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Board;

Board.propTypes = {
    gameOptions: PropTypes.shape({
        pace: PropTypes.string.isRequired,
        cardsCount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }),
    restartGame: PropTypes.func.isRequired,
};