import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Index";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
