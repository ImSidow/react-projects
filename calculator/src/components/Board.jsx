import Keys from "./Keys";
import CalculatorDisplay from "./CalculatorDisplay";

export default function Board() {
    return (
        <div className="bg-white w-full mx-3 md:w-1/4 md:mx-0 h-[90%] rounded-xl flex flex-col justify-end items-center overflow-hidden">
            <CalculatorDisplay />
            <div className="w-full h-2/5 flex justify-end items-end mb-5 mr-10 text-3xl">
                <span className="text-gray-400">87</span>
            </div>
            <Keys />
        </div>
    );
}
