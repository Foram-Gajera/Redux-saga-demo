import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../redux/actions/users";

const Card = (props) => {
  const dispatch = useDispatch();

  const deleteRecord = (id) => {
    // alert("hii");
    console.log("sdf");
    dispatch(deleteUsers(id));
  };

  console.log(props);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.user.company.name}
        </h6>
        <p className="card-text">{props.user.email}</p>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => deleteRecord(props.user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
