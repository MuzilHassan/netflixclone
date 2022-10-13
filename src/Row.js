import React, { useState, useEffect } from 'react';
import axios from './axios';
import './row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const imgurl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);


    const [trailerUrl, settrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)

            return request;
        }
        fetchData();

    }, [fetchUrl]);
    const opts = {
        height: "390",
        with: '100%',
        playerVars: {
            autoplay: 1
        },
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            settrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);

                settrailerUrl(urlParams.get('v'))

            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (

        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map((movie) => (
                    <img onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && 'row__large'}`}
                        key={movie.id}

                        src={`${imgurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

                ))

                }

            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );

}


export default Row;