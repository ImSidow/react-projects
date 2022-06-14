import MovieCard from "./MovieCard";

const movies = [
    { img: "https://image.tmdb.org/t/p/original/1Yc5hIRh3skhsEKLbCHE7v1FBOa.jpg" },
    { img: "https://i.ytimg.com/vi/EWa7a2fFid0/maxresdefault.jpg" },
    { img: "https://roadniche.com/wp-content/uploads/2021/04/best-action-movies-2021-2.jpg" },
    { img: "https://assets-prd.ignimgs.com/2022/05/31/code-8-1654018273548.jpg" },
    { img: "https://fandomwire.com/wp-content/uploads/2021/01/6.jpg" },
];

export default function Movies() {
    return (
        <div className="grid grid-cols-4 gap-x-3 gap-y-5 mt-5 pb-10">
            {movies.map((val, index) => (
                <MovieCard key={index.toString()} movie={val} />
            ))}
        </div>
    );
}
