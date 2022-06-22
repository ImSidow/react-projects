import React, { useContext, useEffect, useState } from "react";

const KeyPressedContext = React.createContext();
const SetKeyPressedContext = React.createContext();

export function useKeyPressedContext() {
    return useContext(KeyPressedContext);
}

export function useSetKeyPressedContext() {
    return useContext(SetKeyPressedContext);
}

export function KeyPressedProvider({ children }) {
    const [keyPressed, setKeyPressed] = useState("");

    useEffect(() => {
        if (keyPressed) {
            setTimeout(() => {
                setKeyPressed("");
            }, 100);
        }
    }, [keyPressed]);

    return (
        <KeyPressedContext.Provider value={keyPressed}>
            <SetKeyPressedContext.Provider value={setKeyPressed}>
                {children}
            </SetKeyPressedContext.Provider>
        </KeyPressedContext.Provider>
    );
}
