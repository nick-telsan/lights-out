import React, {useEffect, useState} from 'react';

import Tile from './Tile';

interface IProps {

}

const GameGrid: React.FC<IProps> = ({}) => {
    const [tiles, setTiles] = useState<Array<Array<boolean>>>([[]]);

    // Set up grid
    useEffect(() => {
        var initTiles: [boolean[]] = [[]];
        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 5; j++){
                initTiles[i].push(true);
            }
            if(i < 4){
                initTiles.push([]);
            }
            
        }
        setTiles(initTiles);
        console.log(tiles);
    }, []);

    const callback = (row: number, col: number) => {
        var tempTiles = tiles;
        tempTiles[row][col] = !tempTiles[row][col];

        // 2D array is not agreeing with me. Concat the new array on the to old one and then slice off the old one...
        setTiles(tiles.concat(tempTiles).slice(5));
    }
        

    return(
        <div>
            {tiles.map((row, rowId) => 
                <div>
                    {row.map((tile, colId) => 
                        <Tile value={tile} row={rowId} col={colId} callback={callback}/>
                    )}
                </div>
            )}
        </div>
    )
}

export default GameGrid;