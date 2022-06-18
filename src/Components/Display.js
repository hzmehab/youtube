import React from "react";

export default function Display(props) {
  let items = props.items;
  return (
    <div class="container">
      <div class="row">
        {items.map((item, index) => {
          const videoId = item.id.videoId;
          const videoTitle = item.snippet.title;
          return (
            <div className="col-3 p-4 mt-4" key={index}>
              <h4
                className="d-inline-block text-truncate"
                title={videoTitle}
                style={{ maxWidth: "250px" }}
              >
                {videoTitle}
              </h4>
              <iframe
                className="border border-danger my-2 mx-2"
                width="100%"
                height="100%"
                src={`http://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
