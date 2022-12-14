import React from 'react';
import PropTypes from 'prop-types';
import Loader from "./../Loader";

import styles from './Board.module.css';
import useGetImages from '../../hooks/useGetImages';
import { useState } from 'react';
import { useEffect } from 'react';

const Board = ({gameOptions}) => {
    const [isLoading, setIsLoading] = useState(true);
    const images = useGetImages(gameOptions);

    useEffect(() => {
        if(images.length > 0) setIsLoading(false);
    }, [images]);

    return (
        <div>
            {isLoading && <Loader />}
        </div>
    );
};

export default Board;
