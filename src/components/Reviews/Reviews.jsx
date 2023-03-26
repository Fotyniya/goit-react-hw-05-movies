import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Ul } from "components/Reviews/Reviews.styled";

const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const {movieId} = useParams();

    useEffect(() => {
    
        async function fetchData(){
           
            //setIsLoading(true);
            try { 
                const url = `${BASE_URL}${movieId}/reviews?api_key=${API_KEY}`;
                const response = await axios.get(url);
                console.log(response.data.results);
                setReviews([...response.data.results]);
                
            } catch(error) {
                
                console.log (error)
            } finally {
                //setIsLoading(false); 
            }
        };
        fetchData()
    }, [movieId]);

    return <div>
        {reviews.length === 0 ? <p>We don't have any reviews for this movie</p> :
        reviews.map(review => {
            return (
                <Ul key={review.id}>
                    <li >
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>
                </Ul>   
                )
            })} 
    </div>
};

export default Reviews;