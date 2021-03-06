import { useCallback, useRef } from "react";
import { useSetCalculateResultContext } from "../context/calculateResultContext";

function arithmeticOperators(oldResult, oldArithmetic, currentNum) {
    switch (oldArithmetic) {
        case "+":
            oldResult += Number(currentNum);
            break;
        case "-":
            oldResult -= Number(currentNum);
            break;
        case "*":
            oldResult *= Number(currentNum);
            break;
        case "/":
            oldResult /= Number(currentNum);
            break;
    }
    return oldResult;
}

export default function useCalculator() {
    const setCalculateResult = useSetCalculateResultContext();
    const pressedKeysValue = useRef([]);

    const calculate = useCallback((values) => {
        let oldResult = null;
        let oldArithmetic = null;
        let currentNum = "";
        let arithmeticUsed = false;

        values.forEach((value) => {
            if (!isNaN(value)) currentNum += value;
            else {
                if (!oldResult) {
                    oldResult = Number(currentNum);
                    oldArithmetic = value;
                } else {
                    oldResult = arithmeticOperators(
                        oldResult,
                        oldArithmetic,
                        currentNum
                    );
                    oldArithmetic = value;
                }
                arithmeticUsed = true;
                currentNum = "";
            }
        });

        oldResult = arithmeticOperators(oldResult, oldArithmetic, currentNum);

        if (arithmeticUsed && !isNaN(values.at(-1)))
            setCalculateResult(oldResult);
    }, []);

    const setPressedKeyValue = (value) => {
        if (isNaN(value) && pressedKeysValue.current.at(-1) === value) return;
        else if (isNaN(value) && isNaN(pressedKeysValue.current.at(-1))) {
            let len = pressedKeysValue.current.length
            pressedKeysValue.current[len -1] = value
            return;
        }

        pressedKeysValue.current = [...pressedKeysValue.current, value];
        calculate(pressedKeysValue.current);

        console.log(pressedKeysValue.current);
    };

    return [setPressedKeyValue];
}
