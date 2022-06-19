import { useEffect, useState } from "react";
import { searchById } from "../api";

export default function MovieCard({ movie }) {
    const [movieFullData, setMovieFullData] = useState({});

    useEffect(() => {

        console.log(movie);

        // searchById(movie.imdbID, (movie) => {
        //     let mins = Number(movie.Runtime.split(' ')?.[0])
        //     console.log(mins / 60);
        //     setMovieFullData(movie);
        // });
    }, []);

    return (
        <div className="drop-shadow-md bg-white rounded-md overflow-hidden hover:scale-105 ease-in duration-200">
            <img src={movieFullData.Poster} alt="movie image" className="w-64 h-56" />
            <div className="px-2 py-3">
                <h1 className="font-bold text-ellipsis overflow-hidden whitespace-nowrap w-36" title={movie.Title}>
                    {movieFullData.Title}
                </h1>
                <p className="text-sm font-light justify-center my-2 h-16 text-ellipsis overflow-hidden"> {movieFullData.Plot} ...</p>
                <div className="flex justify-between items-center px-1">
                    <p className="text-sm font-semibold"> 1h 23min </p>
                    <span className="text-sm font-semibold"> {movieFullData.Ratings?.[0]?.Value} </span>
                </div>
            </div>
        </div>
    );
}
