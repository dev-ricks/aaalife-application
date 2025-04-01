import React from 'react';
import { useState, useEffect } from 'react';
import UserCard from './Card.tsx';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';
import './UsersGrid.css';

interface User {
  id: number;
  username: string;
  full_name: string;
  profile_pic_url: string;
}

interface UsersGridProps {
  searchQuery: string;
}

export default function UsersGrid({ searchQuery }: UsersGridProps) {
  const [users, setUsers] = useState<undefined | null | User[]>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const undefinedUrlTest: string | null | undefined = process.env.REACT_APP_ROCKET_SEARCH_USERS_API_URL;
  const SEARCH_API_URL: string = undefinedUrlTest ?? 'not-set';
  const undefinedKeyTest: string | null | undefined = process.env.REACT_APP_ROCKET_SEARCH_USERS_API_KEY;
  const SEARCH_API_KEY: string = undefinedKeyTest ?? 'not-set';
  const undefinedHostTest: string | null | undefined = process.env.REACT_APP_ROCKET_SEARCH_USERS_API_HOST;
  const SEARCH_API_HOST: string = undefinedHostTest ?? 'not-set';

  useEffect(() => {
    if (!searchQuery) return;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          Accept: 'application/json',
          'X-Rapidapi-Key': SEARCH_API_KEY,
          'X-Rapidapi-Host': SEARCH_API_HOST,
        });
        const requestOptions: RequestInit = SEARCH_API_URL.toLowerCase().startsWith('http')
          ? {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({ query: `${searchQuery}` }),
              cache: 'no-cache',
            }
          : {
              headers: { 'content-type': 'application/json', Accept: 'application/json' },
            };
        const response = await fetch(SEARCH_API_URL, requestOptions);
        if (response.ok) {
          const results = await response.json();
          if (results?.response?.body?.users && Array.isArray(results.response.body.users)) {
            const mappedUsers = results.response.body.users.map((user: User) => ({
              id: user.id,
              username: user.username,
              full_name: user.full_name,
              profile_pic_url: user.profile_pic_url,
            }));
            setUsers(mappedUsers);
          } else {
            setUsers(null);
          }
        } else {
          setUsers(null);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchQuery, SEARCH_API_KEY, SEARCH_API_URL, SEARCH_API_HOST]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" />
      ) : users === null ? (
        <p>No users found for the query `{searchQuery}`.</p>
      ) : (
        <div className="user-grid">{users?.map((user) => <UserCard key={user.id} user={user} />)}</div>
      )}
    </Container>
  );
}
