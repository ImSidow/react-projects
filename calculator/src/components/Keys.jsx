import { useState } from "react";
import calculatorKeys from "../helpers/calculatorKeys";
import Keypad from "./Keypad";

export default function Keys() {
    const [keys, setKeys] = useState(() => getKeys(calculatorKeys));

    return (
        <div className="grid grid-cols-4 w-full gap-3 p-3 bg-[rgba(0,0,0,.04)]">
            {keys.map((data, index) => (
                <Keypad data={data} key={index.toString()} />
            ))}
        </div>
    );
}

function getKeys(calculatorKeys) {
    return Object.keys(calculatorKeys).map((val) => calculatorKeys[val]);
}
