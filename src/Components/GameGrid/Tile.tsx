import React from 'react';

interface IProps {
    value: boolean;
}

const Tile: React.FC<IProps> = ({value}) => {

    const handleClick = () => {
        console.log(value);
    }
        

    return(
        <button className="Tile" onClick={handleClick}/>
    )
}

export default Tile;