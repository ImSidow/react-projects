import Keys from "./Keys";

export default function Board() {
    return (
        <div className="bg-white w-full mx-3 md:w-1/4 md:mx-0 h-[90%] rounded-xl flex flex-col justify-end items-center overflow-hidden">
            <div className="w-full h-full flex justify-end items-end mb-5 mr-10 text-3xl">
                <span>5 + 83</span>
            </div>
            <Keys />
        </div>
    );
}
