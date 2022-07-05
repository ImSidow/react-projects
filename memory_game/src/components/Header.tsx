import { useEffect } from "react";
import { useAppSelector } from "../hooks/reactRedux";

export default function Header() {
    const { moves, pairMatched, allMatched } = useAppSelector((state) => state.board);

    useEffect(() => {
        if (allMatched) alert("d");
    }, [allMatched]);

    return (
        <div className="flex justify-between w-[37%] mb-3">
            <div className="p-2 w-full bg-white rounded-lg drop-shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(pairMatched / 15) * 100}%` }}></div>
                </div>
                <h1 className="text-sm font-bold"> Paries Matched </h1>
                <h1 className="ml-1 font-bold"> {pairMatched} / 15 </h1>
            </div>
            <div className="p-2 w-full bg-white rounded-lg drop-shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-5">
                <h1 className="text-sm font-bold"> Total Movies </h1>
                <h1 className="ml-1 font-bold"> {moves} </h1>
            </div>
        </div>
    );
}
