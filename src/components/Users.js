import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { getUsers } from "../redux/actions/users";
import { useHistory } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log(users);
  // console.log(Object.values(users).map((key) => key));

  // debugger;
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const history = useHistory();
  const AddUser = () => {
    history.push("/add");
  };

  return (
    <div>
      <div style={{ marginLeft: "10px" }}>
        <div className="h3">Users List</div>
        <div>
          <button className="btn btn-primary" onClick={AddUser}>
            Add User
          </button>
        </div>
      </div>

      {loading && <p className="text-center">Loading......</p>}

      {users.length > 0 &&
        users.map((user) =>
          user !== null ? <Card key={user.id} user={user} /> : null
        )}

      {users.length === 0 && <p>No users avaliable!</p>}
      {error && !loading && <p>{error}</p>}
    </div>
  );
};

export default Users;
