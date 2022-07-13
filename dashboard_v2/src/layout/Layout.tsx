import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <main className="h-screen overflow-hidden flex">
            <Sidebar />
            <div className="w-full bg-[#F9F9F9]">
                <Navbar />
                <div className="px-10 py-5">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
