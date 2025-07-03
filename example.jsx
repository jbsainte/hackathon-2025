// src/MonFichier.jsx

import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>{user?.name}</p>
    </div>
  );
}

export default Dashboard;
