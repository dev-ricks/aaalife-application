import React from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox.tsx';
import './UsersSearch.css';

export default function UsersSearch() {
  const navigate = useNavigate();

  const handleSearch = (searchQuery: string) => {
    navigate(`/results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Container>
      <div>
        <h1 className="search-page-title">Users Search Page</h1>
      </div>
      <SearchBox onSearch={handleSearch} />
    </Container>
  );
}
