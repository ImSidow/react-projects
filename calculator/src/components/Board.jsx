import Keys from "./Keys";
import CalculatorDisplay from "./CalculatorDisplay";
import ResultDisplay from "./ResultDisplay";
import { CalculateResultProvider } from "../context/calculateResultContext";

export default function Board() {
    return (
        <CalculateResultProvider>
            <div className="bg-white w-full mx-3 md:w-1/4 md:mx-0 h-[90%] rounded-xl flex flex-col justify-end items-center overflow-hidden">
                <CalculatorDisplay />
                <ResultDisplay />
                <Keys />
            </div>
        </CalculateResultProvider>
    );
}
