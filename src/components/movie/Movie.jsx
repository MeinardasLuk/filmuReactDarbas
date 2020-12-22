import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "#";


const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <h2>{movie.Title}</h2>
        </div>
    );
};


export default Movie;