import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import UsersGrid from '../components/UsersGrid.tsx';
import './UsersDisplay.css';

export default function UserDisplay() {
  const location = useLocation();
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('query');
    setQuery(searchQuery);
  }, [location.search]);

  return (
    <Container>
      <h1 className="users-display-title">Users Display Page</h1>
      {query ? <UsersGrid searchQuery={query} /> : <p>No search query provided.</p>}
    </Container>
  );
}
