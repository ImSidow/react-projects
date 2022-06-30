import Sidebar from "./components/layouts/Sidebar";
import Navbar from "./components/layouts/Navbar";

export default function App() {
    return (
        <main className="h-screen overflow-hidden flex">
            <Sidebar />
            <div aria-describedby="main-content" className="w-full h-full">
                <Navbar />
            </div>
        </main>
    );
}
