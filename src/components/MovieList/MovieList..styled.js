import styled from 'styled-components';

const MovieListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const MovieItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;

    .movie-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      padding: 10px;
      background-color: #f8f8f8;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      img {
        width: 100%;
        height: 310px;
        object-fit: scale-down;
        border-radius: 4px;
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        font-size: 14px;
        font-weight: bold;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &:hover {
      .movie-container {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export { MovieItem, MovieListContainer };
