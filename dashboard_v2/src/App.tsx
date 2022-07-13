import Sidebar from "./layout/Sidebar";

export default function App() {
    return (
        <main className="h-screen overflow-hidden flex">
            <Sidebar />
            <div className="w-full bg-[#F9F9F9]">
                <nav className="flex px-5 py-3">
                    <div className="w-full"></div>
                    <div className="flex justify-end items-center w-full space-x-2">
                        <img className="w-9 h-9 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Rounded avatar" />
                        <img className="w-9 h-9 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Rounded avatar" />
                        <img className="w-9 h-9 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                        <div className="w-9 h-9 overflow-hidden bg-[#4238F3] rounded-full text-white flex justify-center items-center">+</div>
                    </div>
                </nav>
            </div>
        </main>
    );
}
