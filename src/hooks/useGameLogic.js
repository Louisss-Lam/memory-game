/* eslint-disable react-hooks/exhaustive-deps */
import { getFormedData, getPairedPics, addUniqueIds, shuffleCards } from './../utils';

import { useEffect, useState } from "react";

const useGameLogic = (images) => {
    const [cards, setCards] = useState([]);
    const prepareCards = () => {
        const a = getFormedData(images);
        const b = getPairedPics(a);
        const c = addUniqueIds(b);
        const d = shuffleCards(c);
        setCards(d);
    };

    const onCardClick = (e) => {
        console.log(e);
    }

    useEffect(() => {
        if(images.length > 0) prepareCards();
    }, [images]);

    return { cards, onCardClick };
};

export default useGameLogic;
