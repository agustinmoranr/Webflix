import React, { useState, useRef, useEffect } from "react";
import testVideo from "../assets/videos/test-video-2.mp4";
const posterVideo =
  "https://occ-0-29-987.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSFemv1LOz5nHsQa6TrW1N_yyCOIMa11goJH_f_n4XAt6ygtncHEo16ESfZDWHHyKC5_E3tnh-2bD6oYBXbjqxb8MOOB.jpg?r=360";
const Hero = () => {
  const [buttonIcon, setButtonIcon] = useState("volume_off");
  const heroPlayer = useRef(null);

  useEffect(() => autoPlay(), []);
  function autoPlay() {
    setTimeout(() => {
      return heroPlayer.current.play();
    }, 3000);
  }
  function handleReplay(e) {
    e.preventDefault();
    let mediaBtnCopy = buttonIcon;
    mediaBtnCopy = "replay";
    setButtonIcon(mediaBtnCopy);
  }
  function toggleMute(icon) {
    let mediaBtnCopy = buttonIcon;
    if (icon === "volume_off") {
      mediaBtnCopy = "volume_up";
    }
    if (icon === "volume_up") {
      mediaBtnCopy = "volume_off";
    }
    if (icon === "replay") {
      heroPlayer.current.play();
      mediaBtnCopy = "volume_off";
      setButtonIcon(mediaBtnCopy);
      return (heroPlayer.current.muted = true);
    }
    setButtonIcon(mediaBtnCopy);
    return (heroPlayer.current.muted = !heroPlayer.current.muted);
  }
  function handleIcon(e) {
    e.preventDefault();
    return toggleMute(buttonIcon);
  }

  return (
    <section className="hero">
      <div className="hero-background-dark"></div>
      <video
        ref={heroPlayer}
        onEnded={handleReplay}
        poster={posterVideo}
        className="hero__video"
        muted
      >
        <source src={testVideo} type="video/mp4" />
      </video>
      <div className="hero__logo">
        <picture>
          <img
            src="https://occ-0-29-987.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABU0SsrQ7stPoG2alvtMW7Ud2UBI0AaPTTRG4Eg2xIzpkIoyLTJ9Eex53bwwu024ZIehu-Ki18X2Dkv81zEIgvKwLHrH0387wbBS0kGqFtjrzGgVflZOL-RNgiUuFU69DwRLjDgYw8l9vOfYQUfOBwyJY3bICasoIccy3xz0joL3gLw.png?r=900"
            alt=""
          />
        </picture>
      </div>
      <article className="hero__info">
        <div className="hero__info__title">
          <h2>N.º 8 en México hoy</h2>
        </div>
        <div className="hero__info__details">
          <p>2021</p>
          <p>TV-MA</p>
          <p>1 temporada</p>
        </div>
        <div className="hero__info__synopsis">
          <p>
            Buscaba respuestas sobre ella misma, pero terminó encontrando algo
            más oscuro en un escalofriante hotel de Los Ángeles.
          </p>
        </div>
      </article>
      <div className="hero__controls">
        <div>
          <button className="hero__controls__play">
            <i className="material-icons">play_arrow</i>
            <span>Reproducir</span>
          </button>
          <button className="hero__controls__moreInfo">
            <i className="material-icons">info</i>
            <span>Más información</span>
          </button>
        </div>
        <div className="hero__controls__player">
          <button onClick={handleIcon} className="material-icons">
            {buttonIcon}
          </button>
          <span>TV-MA</span>
        </div>
      </div>
      <picture className="hero-background-img">
        <div className="hero-background-img__shadow"></div>
        <img src={posterVideo} alt="poster de la serie en el hero"></img>
      </picture>
    </section>
  );
};

export default Hero;
