import { useState, useEffect, useCallback } from "react";

function arithmeticOperators(arithmetic, oldValue, numStr) {
    if (arithmetic) {
        switch (arithmetic) {
            case "+":
                oldValue += Number(numStr);
                break;
            case "-":
                oldValue -= Number(numStr);
                break;
            case "*":
                oldValue *= Number(numStr);
                break;
            case "/":
                oldValue /= Number(numStr);
                break;
        }
        return oldValue;
    } else return Number(numStr);
}

export default function useCalculator() {
    const [pressedKeysValue, setPressedKeysValue] = useState([]);
    const [pressedKeyValue, setPressedKeyValue] = useState(null);

    useEffect(() => {
        if (pressedKeyValue) {
            setPressedKeysValue((prevPressedKeysValue) => [
                ...prevPressedKeysValue,
                pressedKeyValue,
            ]);
        }
    }, [pressedKeyValue]);

    useEffect(() => {
        calculate(pressedKeysValue);
    }, [pressedKeysValue]);

    const calculate = useCallback((values) => {
        let oldValue = 0;
        let arithmetic = null;
        let numStr = "";

        values.forEach((value) => {
            if (!isNaN(value)) numStr += value;
            else {
                oldValue = arithmeticOperators(arithmetic, oldValue, numStr);

                numStr = "";
                arithmetic = value;
            }
        });
    }, []);

    return [setPressedKeyValue];
}
