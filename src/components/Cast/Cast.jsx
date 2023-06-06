import { DefaultImg } from 'components/DefaultImg/DefaultImg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/ApiService';
import { MyLoader } from 'service/Loader';
import { CastListContainer } from './Cast.styled';
import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const res = await getMovieCredits(movieId);

        if (res.length === 0) {
          setError(true);
        }
        setMovieCast(res);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {error ? (
        <DefaultImg />
      ) : isLoading ? (
        <MyLoader />
      ) : (
        <CastListContainer>
          {movieCast.map(({ id, profile_path, name, character }) => (
            <CastItem
              key={id}
              poster={profile_path}
              name={name}
              character={character}
            />
          ))}
        </CastListContainer>
      )}
    </>
  );
};

export default Cast;
