import React, { useState } from 'react';
import './SearchBox.css';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Validate input: only alphanumeric characters
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      if (value.length <= 30) {
        setQuery(value);
        setError(null); // Clear any previous errors
      } else {
        setError('Maximum length is 30 characters.');
      }
    } else {
      setError('Only alphanumeric characters are allowed.');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === '') {
      setError('Search query cannot be empty.');
      return;
    }

    onSearch(query);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault(); // Disable pasting
    setError('Pasting is not allowed.');
  };

  return (
    <form onSubmit={handleSubmit} className="search-box-container">
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onPaste={handlePaste}
          placeholder="Enter search query"
          maxLength={30} // Enforces max length at the input level
          className="search-box-input"
        />
      </div>
      {error && <p className="search-box-error">{error}</p>}
      <button type="submit" className="search-box-button">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
