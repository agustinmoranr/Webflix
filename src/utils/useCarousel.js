import { useState, useEffect, useRef } from "react";

const useCarousel = (length) => {
  const [onHover, setOnHover] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const itemsContainerRef = useRef(null);
  const carouselRef = useRef(null);
  // console.log(transitioning);
  useEffect(() => {
    const itemsContainer = itemsContainerRef.current;

    if (!onHover) {
      itemsContainer.nextSibling.style.visibility = "hidden";
      itemsContainer.previousSibling.style.visibility = "hidden";
      return;
    }
    itemsContainer.nextSibling.style.visibility = "visible";
    itemsContainer.previousSibling.style.visibility = "visible";
    return;
  }, [onHover]);

  function handleNextContent(e) {
    e.preventDefault();
    if (transitioning) return;
    // const carousel = carouselRef.current;
    // console.log(carousel.offsetWidth);
    const itemsContainer = itemsContainerRef.current;
    // console.log("itemContainer", itemsContainer);
    // console.log("scroll position start", itemsContainer.scrollLeft);
    /*eslint no-self-compare: 0*/
    if (itemsContainer.scrollLeft === itemsContainer.scrollLeft)
      itemsContainer.scrollLeft = 0;
    itemsContainer.scrollLeft += itemsContainer.offsetWidth;
    // console.log("scroll quantity", itemsContainer.offsetWidth);
    // console.log(
    //   "scroll position end",
    //   (itemsContainer.scrollLeft += itemsContainer.offsetWidth)
    // );
    setTransitioning(true);

    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  }

  function handlePreviousContent() {
    if (transitioning) return;
    const itemsContainer = itemsContainerRef.current;
    // console.log("itemContainer", itemsContainer);
    // console.log("scroll position start", itemsContainer.scrollLeft);

    itemsContainer.scrollLeft -= itemsContainer.offsetWidth;
    //console.log("scroll quantity", itemsContainer.offsetWidth);
    // console.log(
    //   "scroll position end",
    //   (itemsContainer.scrollLeft -= itemsContainer.offsetWidth)
    // );

    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  }

  return {
    setOnHover,
    handleNextContent,
    handlePreviousContent,
    // setTransitioning,
    itemsContainerRef,
    carouselRef,
  };
};

export default useCarousel;
