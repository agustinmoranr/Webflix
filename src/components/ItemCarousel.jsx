import React from "react";
// import testVideo from "../assets/videos/test-video-2.mp4";

const imgPath = "https://image.tmdb.org/t/p/w300";
const ItemCarousel = (props) => {
  return (
    <div className="item-carousel">
      <div className="item-carousel__wrapper">
        <picture className="item-carousel__img">
          <img src={`${imgPath}${props.poster_path}`} alt="" />
        </picture>
        <div className="item-carousel__details">
          <div className="item-carousel__details__controls">
            <ul>
              <li className="material-icons">play_circle</li>
              <li className="material-icons">add_circle_outline</li>
              <li className="material-icons">thumb_up_off_alt</li>
              <li className="material-icons">thumb_down_off_alt</li>
            </ul>
            <button className="material-icons show-more">expand_more</button>
          </div>

          <p className="item-carousel__details__info">
            <span className="info__recomendation">96% para ti</span>
            <span className="info__mature-rating">TV-MA</span>
            <span>1h 50min</span>
          </p>

          <p className="item-carousel__details__categories">
            <span>categorie 1</span>
            <span>categorie 2</span>
            <span>categorie 3</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
