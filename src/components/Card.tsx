import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

interface UserProps {
  user: {
    id: number;
    username: string;
    full_name: string;
    profile_pic_url: string;
  };
}

function UserCard({ user }: UserProps) {
  return (
    <div className="user-card">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{user.full_name}</Card.Title>
          <Card.Text>Username : {user.username}</Card.Text>
          <Card.Link href={user.profile_pic_url} target="_blank" rel="noopener noreferrer">
            View Profile Picture
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
