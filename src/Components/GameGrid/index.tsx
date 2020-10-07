import React, {useEffect, useState} from 'react';

import Tile from './Tile';

interface IProps {

}

const GameGrid: React.FC<IProps> = ({}) => {
    const [tiles, setTiles] = useState<Array<Array<boolean>>>([[]]);

    // Set up grid
    useEffect(() => {
        startGame();
    }, []);

    // Generate an all true (lit) board.
    const startGame = () => {
        var initTiles: boolean[][] = [[]];

        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 5; j++){
                initTiles[i].push(true);
            }
            if(i < 4){
                initTiles.push([]);
            }
        }

        initTiles = randomizeTiles(initTiles);
        setTiles(initTiles);
    }

    // Instead of making a complicated algorithm for determining if a puzzle is solvable...
    // we just some random moves on the table. This is always reversable, so the table is solvable...
    // but the user wont know the order of moves to undo them.
    const randomizeTiles = (initTiles: boolean[][]) => {
        var tempTiles: boolean[][] = initTiles;
        for(var i = 0; i < 5; i++){
            for(var j = 0; j < 5; j++){
                if(Math.random() > 0.5){
                    tempTiles = handleTile(tempTiles, i, j);
                }
            }
        }

        return(tempTiles);
    }

    // Checks position of the tile and flips tile and surrounding tiles.
    const handleTile = (initTiles: boolean[][], row: number, col: number) => {
        var tempTiles = initTiles;

        tempTiles[row][col] = !tempTiles[row][col];

        //  Left
        if( col !== 0){
            tempTiles[row][col - 1] = !tempTiles[row][col - 1];
        }
        // Bottom 
        if( row !== 4){
            tempTiles[row + 1][col] = !tempTiles[row + 1][col];
        }
        //  Right
        if( col !== 4){
            tempTiles[row][col + 1] = !tempTiles[row][col + 1];
        }
        // Top 
        if( row !== 0){
            tempTiles[row - 1][col] = !tempTiles[row - 1][col];
        }

        return(tempTiles);
    }

    // Callback from Tile component.
    const callback = (row: number, col: number) => {
        var tempTiles = tiles;
        tempTiles = handleTile(tempTiles, row, col);

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
            <div>
                <div>
                    <button onClick={startGame}>Restart</button>
                </div>
            </div>
        </div>
    )
}

export default GameGrid;