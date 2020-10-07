import React from 'react';

interface IProps {
    value: boolean;
    callback: any;
    row: number;
    col: number;
}

const Tile: React.FC<IProps> = ({value, callback, row, col}) => {

    const handleClick = () => {
        callback(row, col);
    }
        

    return(
        <button className={value ? "lit-Tile" : "unlit-Tile"} onClick={handleClick}/>
    )
}

export default Tile;