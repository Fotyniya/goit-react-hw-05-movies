import { useParams } from "react-router-dom";

const Cast = () => {
    const {movieId} = useParams();
    return <div>
        Casting: { movieId}
    </div>
};

export default Cast;