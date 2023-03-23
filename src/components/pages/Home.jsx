import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
//import { ColorRing } from  'react-loader-spinner'
const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

const Home = () => {
    //const [isLoading, setIsLoading] = useState('false');
    const [movies, setMovies] = useState([]);
    //const [error, setError] = useState(null);
    //const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
    
        async function fetchData(){
            
            //setIsLoading(true);
            try {
               
                const url = `${BASE_URL}?api_key=${API_KEY}`;
                const response = await axios.get(url);
                console.log(response);
                setMovies(prevState => [...prevState, ...response.data.results]);
                //setTotalPages(response.data.total_pages);
            } catch(error) {
                //setError(error)
                console.log (error)
            } finally {
                //setIsLoading(false); 
            }
        };
        fetchData()
    }, []);

return (
    <div>
    <h2>Trending today</h2>
    {/* {isLoading &&<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />} */}
    {movies.map(movie => {
                return (
                    <ul key={movie.id}>
                        <li >
                        <Link key={movie.id} to={`${movie.id}`}>{movie.title}</Link>
                        </li>
  
                    </ul>
                      
                      
                )
            })
        }  
    </div>);
};

export default Home;