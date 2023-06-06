import React from 'react';
import {
  Input,
  Button,
  SearchContainer,
  SearchIcon,
} from './SearchFilms.styled';
import Find from 'components/DefaultImg/Find.png';

const SearchFilms = ({ handleSearch, searchQ }) => {
  return (
    <SearchContainer onSubmit={handleSearch}>
      <Input
        type="text"
        name="searchQ"
        autoComplete="off"
        autoFocus
        placeholder="Search films..."
      />
      <Button type="submit">
        <SearchIcon src={Find} alt="Find" />
      </Button>
    </SearchContainer>
  );
};

export default SearchFilms;
