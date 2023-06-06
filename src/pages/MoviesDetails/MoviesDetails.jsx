import DefaultImg from 'components/DefaultImg/DefaultImg.jpeg';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/ApiService';
import { MyLoader } from 'service/Loader';
import {
  BackButton,
  ButtonGenre,
  ButtonLink,
  Container,
  GenreContainer,
  MovieDetailsContainer,
  ImageWrapper,
  ButtonLinkContainer,
  ButtonLinkContainerDetails,
  DetailsContainer,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await getMovieDetails(movieId);

        if (!res) {
          setError(true);
        }
        setMovie(res);
      } catch {
        setError(true);
        navigate('/', { replace: true });
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId, navigate]);

  if (!movie) {
    return null;
  }

  const { title, release_date, overview, genres, vote_average, poster_path } =
    movie;

  return (
    <Container>
      <BackButton to={backLinkHref}>Go back</BackButton>
      {error ? (
        <DefaultImg />
      ) : isLoading ? (
        <MyLoader />
      ) : (
        <>
          <Container>
            <ImageWrapper>
              <img
                src={
                  poster_path === null
                    ? DefaultImg
                    : `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={title}
              />
              <ButtonLinkContainer>
                <ButtonLink
                  to="cast"
                  state={{ from: location.state?.from } ?? '/'}
                >
                  Cast
                </ButtonLink>
                <ButtonLink
                  to="reviews"
                  state={{ from: location.state?.from } ?? '/'}
                >
                  Reviews
                </ButtonLink>
              </ButtonLinkContainer>
            </ImageWrapper>
            <MovieDetailsContainer>
              <DetailsContainer>
                <h3>{title}</h3>
                <h4>Release date: {release_date}</h4>
                <p>User score: {(vote_average * 10).toFixed(0)}%</p>
              </DetailsContainer>
              <DetailsContainer>
                <h3>Overview:</h3>
                <p>{overview}</p>
              </DetailsContainer>

              <GenreContainer>
                <h3>Genres:</h3>
                {genres.map(genre => (
                  <ButtonGenre key={genre.id}>{genre.name}</ButtonGenre>
                ))}
              </GenreContainer>
              <ButtonLinkContainerDetails>
                <ButtonLink
                  to="cast"
                  state={{ from: location.state?.from } ?? '/'}
                >
                  Cast
                </ButtonLink>
                <ButtonLink
                  to="reviews"
                  state={{ from: location.state?.from } ?? '/'}
                >
                  Reviews
                </ButtonLink>
              </ButtonLinkContainerDetails>
            </MovieDetailsContainer>
          </Container>
          <Outlet />
        </>
      )}
    </Container>
  );
};

export default MoviesDetails;
