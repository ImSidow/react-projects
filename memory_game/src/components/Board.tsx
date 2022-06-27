import React, { useState } from "react";

import images from "./img/Index";
import ImgCard from "./ImgCard";
const availableImages = Object.keys(images);

type ImageType = { id: number; svg: React.ReactNode; shown: boolean };

const randomImages = (arr: string[]): ImageType[] => {
    let arrayOfImages: ImageType[] = [];
    Array.from(Array(15).keys()).forEach((val) => {
        let random = Math.floor(Math.random() * arr.length);

        let svg = { id: arrayOfImages.length, svg: images[arr[random]], shown: false };
        arrayOfImages.push(svg);
        arrayOfImages.push(svg);
    });
    return arrayOfImages.sort(() => 0.5 - Math.random());
};

export default function Board() {
    const [arrayOfSvg, setArrayOfSvg] = useState(() => randomImages(availableImages));

    return (
        <div className="bg-white w-[37%] drop-shadow-md rounded-md p-2 grid grid-cols-5 gap-2">
            {arrayOfSvg.map((val, index) => (
                <ImgCard svg={val.svg} shown={val.shown} key={index} />
            ))}
        </div>
    );
}
