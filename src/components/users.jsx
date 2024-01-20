import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.melivecode.com/api/users")
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <>
      <div>
        {users.map((user) => (
          <ul key={user.id}>
            <li>
              <Link to={"/users/" + user.id}>
                {user.fname} {user.lname}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
