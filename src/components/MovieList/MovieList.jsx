import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieItem, MovieListContainer } from './MovieList..styled';
import DefaultImg from 'components/DefaultImg/DefaultImg.jpeg';
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <div className="movie-container">
                <img
                  src={
                    poster_path === null
                      ? DefaultImg
                      : `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
                  alt={title}
                />
                <div className="title">{title}</div>
              </div>
            </Link>
          </MovieItem>
        );
      })}
    </MovieListContainer>
  );
};

export default MovieList;
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
