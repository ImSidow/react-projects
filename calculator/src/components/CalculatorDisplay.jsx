import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useKeyPressedContext } from "../context/keyPressedContext";

const Span = styled.div`
    & svg {
        width: 15px;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 50%;
    }
`;

function Container({ children }) {
    return (
        <Span className="flex items-center border border-red-500">{children}</Span>
    );
}

export default function CalculatorDisplay() {
    const [pressedKey, setPressedKey] = useState("");
    const keyPressed = useKeyPressedContext();

    useEffect(() => {
        if (keyPressed) {
            let value = keyPressed.icon ?? keyPressed.value;
            setPressedKey((prevKey) => {
                prevKey = prevKey?.props?.children ?? "";
                return (
                    <Container>
                        {prevKey} {value}
                    </Container>
                );
            });
        }
    }, [keyPressed]);

    return (
        <div className="w-full h-full flex justify-end items-end text-3xl text-right px-4 border border-red-500">
            {pressedKey}
        </div>
    );
}
