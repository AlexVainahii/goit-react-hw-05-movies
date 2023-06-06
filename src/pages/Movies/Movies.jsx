import { DefaultImg } from 'components/DefaultImg/DefaultImg';
import MovieList from 'components/MovieList/MovieList';
import SearchFilms from 'components/SearchFilms/SearchFilms';
import { useEffect, useState } from 'react';
import { searchMovies } from 'service/ApiService';
import { MyLoader } from 'service/Loader';
import { ContainerMovie } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQ = searchParams.get('searchQ');
  const [searchMovie, setSearchMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = event => {
    event.preventDefault();
    const searchQ = event.currentTarget.searchQ.value;
    setSearchParams(searchQ !== '' ? { searchQ } : {});
    event.currentTarget.reset();
  };

  useEffect(() => {
    console.log(searchQ);
    if (!searchQ) {
      return;
    }

    async function getSearch() {
      setIsLoading(true);
      try {
        const res = await searchMovies(searchQ);
        console.log(res);
        if (res.length === 0) {
          setError(true);
        }
        setSearchMovie(res);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getSearch();
    return () => {
      setError(false);
    };
  }, [searchQ]);

  return (
    <ContainerMovie>
      <SearchFilms handleSearch={handleSearch} searchQ={searchQ} />
      {error ? (
        <DefaultImg />
      ) : isLoading ? (
        <MyLoader />
      ) : (
        <MovieList movies={searchMovie} />
      )}
    </ContainerMovie>
  );
};

export default Movies;
