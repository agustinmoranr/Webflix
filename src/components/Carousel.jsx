import React, { useState, useEffect, useRef } from "react";

const Carousel = (props) => {
  const [carouselDetails, setCarouselDetails] = useState({
    width: 0,
    maxMargin: 0,
  });
  const [onHover, setOnHover] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const carousel = carouselContainerRef.current;
    const style = getComputedStyle(carousel);

    const carouselPadding = parseInt(
      getComputedStyle(carousel.parentNode).paddingLeft
    );
    console.log("padding left", carouselPadding);

    // viweport width
    const width = parseInt(style.width);
    console.log("viweport width: ", width - carouselPadding);

    const itemWidth = carousel.firstChild.getBoundingClientRect().width;
    console.log("itemsWidth: ", itemWidth);

    const items = carousel.childNodes.length;
    console.log("items: ", items);

    const carouselWidth = itemWidth * items - carouselPadding;
    console.log("carousel width: ", carouselWidth);

    const maxMargin = carouselWidth - width;
    console.log("maxMargin: ", maxMargin);

    if (itemWidth < 290) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return setCarouselDetails({ width, maxMargin, itemWidth, carouselPadding });
  }, []);

  useEffect(() => {
    //si el viweport width > ancho del carousel. no muestres los controles
    if (carouselDetails.maxMargin < 0) return;
    const carousel = carouselContainerRef.current;

    if (!onHover) {
      carousel.nextSibling.style.visibility = "hidden";
      carousel.previousSibling.style.visibility = "hidden";
      return;
    }
    carousel.nextSibling.style.visibility = "visible";
    carousel.previousSibling.style.visibility = "visible";
    return;
  }, [onHover]);

  function handleNextContent(e) {
    e.preventDefault();
    if (transitioning) return;

    const carousel = carouselContainerRef.current;
    const style = getComputedStyle(carousel);

    let marginLeft = parseInt(style.marginLeft);
    console.log("initial margin left: ", marginLeft);

    if (Math.abs(marginLeft) === carouselDetails.maxMargin) {
      return (carousel.style.marginLeft = "0px");
    }

    let scroll = (marginLeft -= carouselDetails.width);
    console.log("scroll", scroll);

    if (Math.abs(scroll) > carouselDetails.maxMargin) {
      console.log(
        "end margin left: ",
        `${-Math.abs(carouselDetails.maxMargin)}px`
      );
      carousel.parentNode.style.paddingLeft = "0";

      return (carousel.style.marginLeft = `${-Math.abs(
        carouselDetails.maxMargin
      )}px`);
    }
    carousel.style.marginLeft = `${scroll}px`;
    console.log("end margin left: ", carousel.style.marginLeft);

    carousel.parentNode.style.paddingLeft = "0";
    setTransitioning(true);
  }

  function handlePreviousContent() {
    if (transitioning) return;

    const carousel = carouselContainerRef.current;
    const style = getComputedStyle(carousel);

    let marginLeft = parseInt(style.marginLeft);
    console.log("initial margin left: ", marginLeft);

    if (marginLeft === 0) {
      console.log("end margin left: ", -carouselDetails.maxMargin);
      return (carousel.style.marginLeft = `${-carouselDetails.maxMargin}px`);
    }

    let scroll = (marginLeft += carouselDetails.width);
    console.log("scroll", scroll);

    if (scroll > 0) {
      console.log("end margin left: ", "0px");
      carousel.parentNode.style.paddingLeft = "0";

      return (carousel.style.marginLeft = "0px");
    }

    carousel.style.marginLeft = `${scroll}px`;
    console.log("end margin left: ", carousel.style.marginLeft);

    carousel.parentNode.style.paddingLeft = "0";
    setTransitioning(true);
  }

  return (
    <section className="carousel">
      <h1 className="carousel__title">{props.title}</h1>
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
          {props.children}
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
