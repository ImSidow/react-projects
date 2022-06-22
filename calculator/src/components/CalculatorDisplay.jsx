import React, { useState, useEffect } from "react";
import useCalculator from "../hooks/useCalculator";
import styled from "styled-components";
import { useKeyPressedContext } from "../context/keyPressedContext";

const Span = styled.div`
    & svg {
        width: 15px;
        margin-left: 5px;
        margin-right: 5px;
        height: 1.3em;
        vertical-align: bottom;
    }
`;

function Container({ children }) {
    return <Span className="flex justify-end flex-wrap">{children}</Span>;
}

export default function CalculatorDisplay() {
    const [setPressedKeyValue] = useCalculator();
    const [pressedKey, setPressedKey] = useState("");
    const keyPressed = useKeyPressedContext();

    useEffect(() => {
        if (keyPressed) {
            setPressedKeyValue(keyPressed.value);
            let value = keyPressed.icon ?? keyPressed.value;
            setPressedKey((prevKey) => {
                prevKey = prevKey?.props?.children ?? "";

                if (typeof prevKey === "object") {
                    value = <span>{value}</span>;
                }

                return (
                    <Container>
                        {prevKey} {value}
                    </Container>
                );
            });
        }
    }, [keyPressed]);

    return (
        <div className="w-full h-full flex justify-end items-end text-3xl px-4">
            {pressedKey}
        </div>
    );
}
