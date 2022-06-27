export default function Footer() {
    return (
        <div className="mt-3 w-[37%]">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">
                Reset game
            </button>
            <button type="button" className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none">
                End game
            </button>
        </div>
    );
}
