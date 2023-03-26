import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ColorRing } from  'react-loader-spinner'

import { CastList, CastListItem, CastCard } from "components/Cast/Cast.styled";


const API_KEY = '28b9dff9541e6a7c7078bb12d751dcf6';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const Cast = () => {
    const [casts, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
    
        async function fetchData(){
           
            setIsLoading(true);
            try { 
                const url = `${BASE_URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`;
                const response = await axios.get(url);
                console.log(response);
                setCast(response.data.cast);
            } catch(error) {
                console.log (error)
            } finally {
                setIsLoading(false); 
            }
        };
        fetchData()
    }, [movieId]);

    const imageUrl = new URL(
        'components/images/defaultImg.png?width=240',
        import.meta.url
      );

    return <>
        {isLoading && <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        <CastList>
        {casts.map(cast => {
            return (
                <CastListItem key={cast.id}>
                    <li >
                    {(cast.profile_path) ? <CastCard 
                        src={'https://image.tmdb.org/t/p/w500'+cast.profile_path}  
                        alt={cast.original_name} /> : 
                        <CastCard src={imageUrl} alt='No photo' height="360" /> 
                    }
                    
                    <p>{cast.name}</p>
                    <p>Character: {cast.character} </p>
                    </li>
                </CastListItem>   
                )
            })} 
        </CastList>
    </>
};

export default Cast;