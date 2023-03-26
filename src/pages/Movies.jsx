import { useEffect, useState } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";

import axios from 'axios';
import { SearchBox } from "components/SearchBox";

import { ColorRing } from  'react-loader-spinner'

const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();    
    let movieTitle = searchParams.get("filter") ?? '';
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState('false');
    const location = useLocation();
        
    useEffect(() => {
    
        async function fetchData(){
           
            setIsLoading(true);
            try { 
                const url = `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1&query=${movieTitle}`;
                const response = await axios.get(url);
                console.log(response);
                setMovies(response.data.results);
                //setTotalPages(response.data.total_pages);
            } catch(error) {
                //setError(error)
                console.log (error)
            } finally {
                setIsLoading(false); 
            }
        };
        fetchData()
    }, [movieTitle]);
    
    const handleFilter = () => {   
        console.log(movies); 
          
    };
    
    const updateQueryString = (filter) => {
        const nextParams = filter !== "" ? { filter } : {};
        setSearchParams(nextParams);
      };

    return (
        <div> 
            {isLoading &&<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
            <SearchBox value={movieTitle} onChange={updateQueryString} />
            <button type='button' onClick = { handleFilter }>Search</button>
            { movieTitle && movies.map(movie => {
                return (
                    <ul key={movie.id}>
                        <li >
                        <Link key={movie.id} to={`/${movie.id}`} state = {{from: location}} >{movie.title}</Link>
                        </li>
                    </ul>   
                )
            })}  
        </div>
    );
};

export default Movies;
