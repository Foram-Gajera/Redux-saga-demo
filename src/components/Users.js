import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { getUsers } from "../redux/actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users.loading && <p>Loading......</p>}
      {users.length > 0 &&
        users.map((user) => <Card user={user} key={user.id} />)}

      {users.length === 0 && <p>No users avaliable!</p>}
      {users}
      {error && !loading && <p>{error}</p>}
    </div>
  );
};

export default Users;
