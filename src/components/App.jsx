import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

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
