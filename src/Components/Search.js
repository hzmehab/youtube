import React from "react";

export default function Search(props) {
  return (
    <div className="d-flex justify-content-center p-3">
      <form onSubmit={props.getResult}>
        <input
          className="py-1 px-3 m-2"
          type="search"
          name="search"
          placeholder="What you think?"
        ></input>
        <button className="btn btn-danger">Search</button>
      </form>
    </div>
  );
}
