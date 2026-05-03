import React, { useEffect, useState } from "react";
import "./userCard.css";

const UserCard = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      setError(null);

      fetch(`https://api.github.com/users/matteolvt`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }
  }, [user]);
  if (isLoading) {
    return <p>Chargement en cours... ⏳</p>;
  }

  if (error) {
    return <p>Erreur : {error} ❌</p>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="user-card">
      <h2>{userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.name} />
    </div>
  );
};

export default UserCard;
