import SearchIcon from "../components/icons/SearchIcon";

const Navbar = () => {
    return (
        <nav className="flex px-5 py-3">
            <div className="relative w-full pl-3">
                <div className="flex absolute inset-y-0 left-3 items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-4 h-4 text-gray-900 dark:text-gray-400" />
                </div>
                <input
                    type="text"
                    id="input-group-1"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                />
            </div>
            <div className="flex justify-end items-center w-full space-x-2">
                <img className="w-9 h-9 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Rounded avatar" />
                <img className="w-9 h-9 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Rounded avatar" />
                <img className="w-9 h-9 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                <div className="w-9 h-9 overflow-hidden bg-[#4238F3] rounded-full text-white flex justify-center items-center">
                    <span className="-mt-0.5">+</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
