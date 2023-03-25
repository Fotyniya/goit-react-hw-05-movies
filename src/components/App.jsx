import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails"
import Layout from "./Layout";
import Cast from "./Cast";
import Reviews from "./Reviews";
//import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />} />
          <Route path=":movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews />} />
          </ Route >
          <Route path="*" element={<Home/>} />
        </Route>
     
      </Routes>
  );
};
