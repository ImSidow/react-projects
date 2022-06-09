import { useEffect, useState } from "react";

const initialValue = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

function isBoardFull(board) {
    let isFull = true;
    for (let row of board) {
        for (let column of row) {
            if (column === "") {
                isFull = false;
                break;
            }
        }
    }
    return isFull;
}

function isGameOver(board) {
    let winner = null;

    // check row contains same value
    for (let row of board) {
        let allSame = row.every((val) => val === row[0] && row[0] !== "");
        if (allSame) {
            winner = row[0];
            break;
        }
    }

    // check column contains same value
    let row = 0;
    let column = 0;
    for (let i = 0; i < 3; i++) {
        let requiredValue = board[row][column];
        for (let k = 0; k < 3; k++) {
            if (requiredValue !== board[row][column]) break;
            row++;
        }

        if (row === 3 && requiredValue !== "") {
            console.log("first");
            winner = requiredValue;
            break;
        }

        column++;
        row = 0;
    }

    // check diagonals contains same value
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {
        winner = board[0][0];
    } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== "") {
        winner = board[2][0];
    }

    if (!winner && isBoardFull(board)) return "draw";
    return winner;
}

export default function useTicTacToeBoard() {
    const [winner, setWinner] = useState(null);
    const [player, setPlayer] = useState("O");
    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    useEffect(() => {
        // toggle player
        if (player === "X") setPlayer("O");
        else if (player === "O") setPlayer("X");

        // check if a player win
        let result = isGameOver(board);
        if (result) setWinner(result);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [board]);

    const modifyBoard = (row, column) => {
        let newBoard = [...board];
        if (newBoard[row][column] === "" && !winner) {
            newBoard[row][column] = player;
            setBoard(newBoard);
        }
    };

    const reset = () => {
        setBoard(initialValue);
    };

    return [board, modifyBoard, player, winner, reset];
}
