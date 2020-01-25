import React from "react";
import "./ImageCard.css";

// $('.special.cards .image').dimmer({
//     on: 'hover'
//   });

const ImageCard = props => (
  <div className="card">
    <div className="blurring dimmable image">
      <div className="ui dimmer">
        <div className="content">
          <div className="center">
            <div className="ui inverted button">Check it out!</div>
          </div>
        </div>
      </div>
      <img src={props.image} alt={props.alt} />
    </div>
    <div className="content">
      <a
        className="header"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
      <div className="meta">
        <span className="tech">{props.tech}</span>
      </div>
    </div>
  </div>
);

export default ImageCard;
