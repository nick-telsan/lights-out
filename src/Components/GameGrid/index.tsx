import React, {useEffect, useState} from 'react';

import Tile from './Tile';

interface IProps {

}

const GameGrid: React.FC<IProps> = ({}) => {
    const [tiles, setTiles] = useState<Array<Array<boolean>>>([[]]);

    useEffect(() => {
        console.log('Component mounted');
        startGame();
    }, []);

    const startGame = () => {
        var initTiles: [boolean[]] = [[]];
        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 5; j++){
                initTiles[i].push(false);
            }
            if(i < 4){
                initTiles.push([]);
            }
            
        }
        setTiles(tiles.concat(initTiles));
    }
        

    return(
        <div>
            {tiles.map((row, rowId) => 
                <div>
                    {row.map((tile, colId) => 
                        <Tile value={tile}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default GameGrid;