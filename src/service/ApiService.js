// Імпорт axios
import axios from 'axios';

// Функція для отримання списку найпопулярніших фільмів
export const getTrendingMovies = () => {
  const apiKey = '63484517efcaf3e39c07176755fc0179';
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

  return axios
    .get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.error(
        'Помилка при отриманні списку найпопулярніших фільмів:',
        error
      );
    });
};

// Функція для пошуку фільму за ключовим словом
export const searchMovies = keyword => {
  const apiKey = '63484517efcaf3e39c07176755fc0179';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;

  return axios
    .get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.error('Помилка при пошуку фільмів:', error);
    });
};

// Функція для отримання повної інформації про фільм
export const getMovieDetails = movieId => {
  const apiKey = '63484517efcaf3e39c07176755fc0179';
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Помилка при отриманні інформації про фільм:', error);
    });
};

// Функція для отримання інформації про акторський склад фільму
export const getMovieCredits = movieId => {
  const apiKey = '63484517efcaf3e39c07176755fc0179';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

  return axios
    .get(url)
    .then(response => {
      return response.data.cast;
    })
    .catch(error => {
      console.error(
        'Помилка при отриманні інформації про акторський склад:',
        error
      );
    });
};

// Функція для отримання оглядів фільму
export const getMovieReviews = movieId => {
  const apiKey = '63484517efcaf3e39c07176755fc0179';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

  return axios
    .get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.error('Помилка при отриманні оглядів фільму:', error);
    });
};
