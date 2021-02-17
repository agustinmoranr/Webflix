import React from "react";
import useCarousel from "../utils/useCarousel";
const Carousel = ({ title, children, length }) => {
  const {
    setOnHover,
    handleNextContent,
    handlePreviousContent,
    setTransitioning,
    carouselContainerRef,
  } = useCarousel(length);

  return (
    <section className="carousel">
      <h1 className="carousel__title">{title}</h1>
      <div
        className="carousel__container"
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <button
          onClick={handlePreviousContent}
          className="material-icons nav-prev"
          type="button"
        >
          navigate_before
        </button>

        <div
          onTransitionEnd={() => setTransitioning(false)}
          ref={carouselContainerRef}
          className="items-container"
        >
          {children}
        </div>

        <button
          onClick={handleNextContent}
          className="material-icons nav-next"
          type="button"
        >
          navigate_next
        </button>
      </div>
    </section>
  );
};

export default Carousel;
