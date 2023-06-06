import styled from 'styled-components';

const SearchContainer = styled.form`
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  width: 300px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  position: absolute;
  right: 0px;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export { Input, Button, SearchContainer, SearchIcon };
