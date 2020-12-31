import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteUsers } from "../redux/actions/users";

const Card = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteRecord = (id) => {
    // alert("hii");
    console.log("delete");
    dispatch(deleteUsers(id));
  };

  const updateRecord = (id) => {
    // alert("hii");
    console.log("update");
    history.push(`user/${id}`);
  };

  console.log(props);
  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "60%",
        marginLeft: "20%",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.company}</h6>
        <p className="card-text">{props.user.email}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-success"
          onClick={() => updateRecord(props.user.id)}
        >
          Update
        </button>
        <br />

        <button
          className="btn btn-danger"
          style={{ marginTop: "10%" }}
          onClick={() => deleteRecord(props.user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
