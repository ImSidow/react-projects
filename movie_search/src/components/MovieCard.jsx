export default function MovieCard({ movie }) {
    return (
        <div className="drop-shadow-md bg-white rounded-md overflow-hidden hover:scale-105 ease-in duration-200">
            <img src={movie.img} alt="movie image" className="w-64 h-48" />
            <div className="px-2 py-3">
                <h1 className="font-bold"> Movie Name </h1>
                <p className="text-sm font-light justify-center my-2"> Lorem ipsum dolor sit amet con se ctetur adipisicing elit. Totam iure.</p>
                <div className="flex justify-between items-center px-1">
                    <p className="text-sm font-semibold"> 1h 23min </p>
                    <span className="text-sm font-semibold"> 4.5 </span>
                </div>
            </div>
        </div>
    );
}
