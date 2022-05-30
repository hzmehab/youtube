import React, { Component } from "react";

export default class Display extends Component {
  render() {
    let items = this.props.items;

    const videos = items.map((item) => {
      return (
        <div className="d-inline">
          <iframe
            className="border border-danger my-2 mx-2"
            width="250"
            height="250"
            src="http://www.youtube.com/embed/${items.id.videosId}"
            frameborder="0"
          ></iframe>
        </div>
      );
    });

    return <div>{videos}</div>;
  }
}
