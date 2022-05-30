import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center p-3">
        <form onSubmit={this.props.getResult}>
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
}
