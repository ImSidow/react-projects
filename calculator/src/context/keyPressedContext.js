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

    return (
        <KeyPressedContext.Provider value={keyPressed}>
            <SetKeyPressedContext.Provider value={setKeyPressed}>
                {children}
            </SetKeyPressedContext.Provider>
        </KeyPressedContext.Provider>
    );
}
