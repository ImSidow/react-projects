import Search from "./components/Search";
import Filter from "./components/Filter";
import Movies from "./components/Movies";

export default function App() {
    return (
        <main className="bg-[#E9EAF1] h-screen overflow-auto flex justify-center">
            {/* <main className="h-screen overflow-auto flex justify-center"> */}
            <div className="w-4/6">
                <Search />
                <Filter />
                <Movies />
            </div>
        </main>
    );
}
