import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const Reviews = () => {
    const [reviews, setReviews] = useState();

    const {movieId} = useParams();

    useEffect(() => {
    
        async function fetchData(){
           
            //setIsLoading(true);
            try { 
                const url = `${BASE_URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
                const response = await axios.get(url);
                console.log(response.data.results);
                setReviews([...response.data.results]);
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
       {reviews && reviews.map(review => {
            return (
                <ul key={review.id}>
                    <li >
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                </ul>   
                )
            })} 
    </div>
};

export default Reviews;