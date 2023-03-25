import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useNavigate, useSearchParams } from "react-router-dom";
import axios from 'axios';
import { ColorRing } from  'react-loader-spinner'
const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState('false');
    const [movieItem, setMovieItem] = useState([]);

    const params = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    console.log(searchParams)
    const goBack = () => navigate();

    console.log(params)
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
    },[movieId])

    return <>
    <h2>{ movieItem.original_title} ({ movieItem.release_date})</h2>
    <Link type='button' onClick = { goBack } >Go back</Link>
    <div>
        
        <img src={'https://image.tmdb.org/t/p/w500'+movieItem.poster_path} alt={movieItem.original_title} />
        <p>User Score: {movieItem.popularity} </p>
        <p>Overview: {movieItem.overview}</p>

    </div>
    {isLoading &&<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        
    <ul>
        <li>
        <Link to="cast">Cast</Link>
        </li>
        <li>
        <Link to="reviews">Reviews</Link>
        </li>
        <Outlet />
    </ul>
     
    </>
};

export default MovieDetails;