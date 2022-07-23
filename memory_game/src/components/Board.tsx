import { useAppSelector } from "../hooks/reactRedux";

import ImgCard from "./ImgCard";

export default function Board() {
    const { randomImages } = useAppSelector((state) => state.board);

    return (
        <div className="bg-white w-full md:w-[70%] lg:w-[40%] drop-shadow-md rounded-md p-2 grid grid-cols-5 gap-2">
            {randomImages.map((val, index) => (
                <ImgCard data={val} key={index} />
            ))}
        </div>
    );
}
