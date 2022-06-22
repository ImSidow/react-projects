import { useCalculateResultContext } from "../context/calculateResultContext";

export default function ResultDisplay() {
    const calculateResult = useCalculateResultContext();

    return (
        <div className="w-full h-2/5 flex justify-end items-end mb-5 mr-10 text-3xl">
            <span className="text-gray-400">{calculateResult}</span>
        </div>
    );
}
