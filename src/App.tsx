import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/UsersSearch.tsx';
import SearchResults from './pages/UsersDisplay.tsx';

export default function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
