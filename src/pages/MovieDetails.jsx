import { Suspense,useEffect, useState, useRef } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { SlActionUndo } from "react-icons/sl";
import { GoFile } from "react-icons/go";
import { MovieCard, Description, Poster, ListGenres, Ul, StyledLink } from "components/Movie.styled";

import axios from 'axios';
import { ColorRing } from  'react-loader-spinner'
const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState('false');
    const [movieItem, setMovieItem] = useState([]);
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? "/");
    console.log(location);

    useEffect(() => {
        async function fetchData(){
            
            setIsLoading(true);
            try {
                const url = `${BASE_URL}${movieId}?api_key=${API_KEY}`;
                const response = await axios.get(url);
                console.log(response);
                setMovieItem(response.data);
            } catch(error) {
                //setError(error)
                console.log (error)
            } finally {
                setIsLoading(false); 
            }
        };
        fetchData()
    },[movieId]);

    return <div>
    <StyledLink to = {backLinkLocation.current} ><SlActionUndo/> Go back</StyledLink>
    <h2>{ movieItem.original_title} ({movieItem.release_date === undefined ? 'no date' : movieItem.release_date.slice(0, 4)})</h2>

    <MovieCard>
            <Poster src={'https://image.tmdb.org/t/p/w500'+movieItem.poster_path} 
            alt={movieItem.original_title} /> 
        <Description>
            <p>User Score: {(movieItem.vote_average * 10).toFixed(1)}% </p>
            <h3>Overview: </h3>
            <p>{movieItem.overview}</p>
            <h3>Genres:</h3>
            <ListGenres>
                { movieItem.genres && movieItem.genres.map(genre => {
                return (               
                    <Ul key={genre.id}>
                        <li >{genre.name}</li>
                    </Ul>  
                    )
                })} 
            </ListGenres>
             
        </Description>
        
    </MovieCard>
    {isLoading &&<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        
    <Ul>
        <li>
            <StyledLink to="cast"><GoFile /> Cast</StyledLink>
        </li>
        <li>
            <StyledLink to="reviews"><GoFile /> Reviews</StyledLink>
        </li>
        <Suspense fallback={<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}>
            <Outlet />
        </Suspense>
    </Ul>
    </div>
};

export default MovieDetails;