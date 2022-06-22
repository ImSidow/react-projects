import React, { useState, useEffect, useRef } from "react";
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
    const calculatorDisplayRef = useRef();
    const prevDisplay = useRef();
    const pressedKey = useRef(null);

    const [setPressedKeyValue] = useCalculator();
    const keyPressed = useKeyPressedContext();

    useEffect(() => {
        if (keyPressed) {
            let value = keyPressed.icon ?? keyPressed.value;
            if (typeof value === "object" && !pressedKey.current) return;

            //
            let element = calculatorDisplayRef.current.children[0];
            let elementChildren = element?.children;
            let elementChildrenLen = element?.children.length;

            // update ref as state
            pressedKey.current = update(
                pressedKey.current,
                value,
                element,
                elementChildren,
                elementChildrenLen
            );
            setPressedKeyValue(keyPressed.value);
        }
    }, [keyPressed]);

    const update = (
        prevKey,
        value,
        element,
        elementChildren,
        elementChildrenLen
    ) => {
        prevKey = prevKey?.props?.children ?? "";

        if (element) {
            let lastElementChildrenLen =
                elementChildren[elementChildrenLen - 1].children.length;

            if (lastElementChildrenLen > 0 && typeof value === "object")
                return (
                    <Container>
                        {prevDisplay.current} <span>{value}</span>
                    </Container>
                );
        }

        prevDisplay.current = prevKey;
        return (
            <Container>
                {prevKey} <span>{value}</span>
            </Container>
        );
    };

    return (
        <div
            ref={calculatorDisplayRef}
            className="w-full h-full flex justify-end items-end text-3xl px-4"
        >
            {pressedKey.current}
        </div>
    );
}
