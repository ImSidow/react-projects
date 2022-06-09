import { useEffect, useState } from "react";
import useTicTacToeBoard from "../hooks/useTicTacToeBoard";
import Card from "./Card";

export default function Board() {
    const [gameState, setGameState] = useState(null);
    const [board, modifyBoard, player, winner, reset] = useTicTacToeBoard();

    useEffect(() => {
        if (winner) {
            if (winner === "draw") setGameState(winner);
            else setGameState(`${winner} won`);
        }
    }, [winner]);

    return (
        <>
            <div className="flex justify-between mb-4 px-3 w-5/12">
                <h1 className="text-lg">
                    Player turn : <span className="font-bold">{player}</span>
                </h1>
                {gameState ? (
                    <h1 className="text-lg">
                        Game State :<span className="font-bold"> {gameState}</span>
                    </h1>
                ) : (
                    ""
                )}
            </div>

            <div className="grid grid-cols-3 gap-1 bg-white w-5/12 h-4/6 drop-shadow-sm rounded-md p-1">
                {board.map((row, rowIndex) =>
                    row.map((column, columnIndex) => (
                        <Card
                            value={column}
                            key={columnIndex.toString()}
                            onClick={() => modifyBoard(rowIndex, columnIndex)}
                        />
                    ))
                )}
            </div>

            <button className="bg-blue-400 w-32 h-10 mt-5 text-white rounded-md" onClick={reset}>
                Reset
            </button>
        </>
    );
}
