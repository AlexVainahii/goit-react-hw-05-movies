import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/ApiService';
import { MyLoader } from 'service/Loader';
import { Title } from './Home.styled';
import { DefaultImg } from 'components/DefaultImg/DefaultImg';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getTrendMovies() {
      try {
        const res = await getTrendingMovies();
        setMovies(res);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <>
      <Title>Trending Films Today</Title>

      {error ? (
        <DefaultImg />
      ) : isLoading ? (
        <MyLoader />
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
};

export default Home;
