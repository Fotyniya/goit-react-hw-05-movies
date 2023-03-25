import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const Cast = () => {
    const [casts, setCast] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
    
        async function fetchData(){
           
            //setIsLoading(true);
            try { 
                const url = `${BASE_URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`;
                const response = await axios.get(url);
                console.log(response);
                setCast(response.data.cast);
                //setTotalPages(response.data.total_pages);
            } catch(error) {
                //setError(error)
                console.log (error)
            } finally {
                //setIsLoading(false); 
            }
        };
        fetchData()
    }, [movieId]);

    return <div>
       {casts.map(cast => {
            return (
                <ul key={cast.id}>
                    <li >
                    <img 
                        src={'https://image.tmdb.org/t/p/w500'+cast.profile_path}  
                        alt={cast.original_name} />
                    <p>{cast.name}</p>
                    <p>Character: {cast.character} </p>
                    </li>
                </ul>   
                )
            })} 
    </div>
};

export default Cast;