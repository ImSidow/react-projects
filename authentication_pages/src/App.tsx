import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {

    useEffect(() => {
        document.documentElement.classList.remove("dark");
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
