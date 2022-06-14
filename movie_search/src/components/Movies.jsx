import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { searchByTitle } from "../api";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        searchByTitle("white", (movies) => {
            setMovies(movies);
        });
    }, []);

    return (
        <div className="grid grid-cols-4 gap-x-3 gap-y-5 mt-5 pb-10">
            {movies.map((val, index) => (
                <MovieCard key={index.toString()} movie={val} />
            ))}
        </div>
    );
}
