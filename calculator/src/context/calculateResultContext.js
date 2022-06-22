import React, { useContext, useEffect, useState } from "react";

const CalculateResultContext = React.createContext();
const SetCalculateResultContext = React.createContext();

export function useCalculateResultContext() {
    return useContext(CalculateResultContext);
}

export function useSetCalculateResultContext() {
    return useContext(SetCalculateResultContext);
}

export function CalculateResultProvider({ children }) {
    const [calculateResult, setCalculateResult] = useState(0);

    return (
        <CalculateResultContext.Provider value={calculateResult}>
            <SetCalculateResultContext.Provider value={setCalculateResult}>
                {children}
            </SetCalculateResultContext.Provider>
        </CalculateResultContext.Provider>
    );
}
