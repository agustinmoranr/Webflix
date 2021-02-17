import React, { useState, useEffect } from "react";
import "./styles/Home.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import ItemCarousel from "../components/ItemCarousel";

function App() {
  const [movies, setMovies] = useState({
    miLista: [],
    tendencias: [],
    originals: [],
  });

  useEffect(() => {
    async function getMovies() {
      const api_key = "df773e56e533884f1644caecf3837215";
      const URL =
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        api_key +
        "&primary_release_year=2017&sort_by=revenue.desc";
      try {
        const data = await fetch(URL).then((response) => response.json());
        const results = data.results;
        const reversed = [...results];
        setMovies({
          tendencias: results,
          miLista: [],
          originals: reversed.reverse(),
        });
      } catch (error) {
        console.error("FETCH ERROR:", error);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main className="home-content">
        {movies.miLista.length > 0 ? (
          <Carousel title="Mi Lista" length={movies.miLista.length}>
            {movies.miLista.map((movie, index) => (
              <ItemCarousel key={movie.id} {...movie} />
            ))}
          </Carousel>
        ) : (
          <div></div>
        )}

        {movies.tendencias.length > 0 ? (
          <Carousel title="Tendencias" length={movies.tendencias.length}>
            {movies.tendencias.map((movie, index) => (
              <ItemCarousel key={movie.id} {...movie} />
            ))}
          </Carousel>
        ) : (
          <p>Loading</p>
        )}
        {movies.originals.length > 0 ? (
          <Carousel
            title="Originales de Netflix"
            length={movies.originals.length}
          >
            {movies.originals.map((movie, index) => (
              <ItemCarousel key={index} {...movie} />
            ))}
          </Carousel>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default App;
