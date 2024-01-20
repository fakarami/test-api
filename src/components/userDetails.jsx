import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [user, setUser] = useState({});
  const [pagestate, setPagestate] = useState("loading");
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get("https://www.melivecode.com/api/users/" + userId)
      .then(({ data }) => {
        setUser(data.user);
        setPagestate("loaded");
      })
      .catch(() => {
        setPagestate("error");
      });
  }, [userId]);
  return (
    <>
      {pagestate === "loading" && <>page is loading</>}
      {pagestate === "error" && <>user not found</>}
      {pagestate === "loaded" && (
        <div>
          <h3>Useretails</h3>
          <ul>
            <li>First name:{user.fname}</li>
            <li>Last name:{user.lname}</li>
            <li>Email:{user.email}</li>
            <li>
              <img src={user.avatar} alt={user.fname} />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
