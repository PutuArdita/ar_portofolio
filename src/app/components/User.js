"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <p key={user.id}>
            {user.name} | {user.email} | {user.address.city}
          </p>
        ))
      )}
    </div>
  );
}
