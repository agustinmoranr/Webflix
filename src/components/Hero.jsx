import React, { useState, useRef } from "react";
import testVideo from "../assets/videos/test-video-2.mp4";
const posterVideo =
  "https://occ-0-29-987.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcX_OLWfPwIOdND595ti_aL-8vtYh-UAi5E7j0xBOkay1m2CNvbUq0MQ1XgFCFueR8LHMPa6VZGL7RlPtUPvxGUt6MLw.jpg?r=a03";
const Hero = () => {
  const [buttonIcon, setButtonIcon] = useState("volume_up");
  const heroPlayer = useRef(null);

  (function autoPlay() {
    setTimeout(() => {
      if (heroPlayer.current !== null) {
        return heroPlayer.current.play();
      }
    }, 3000);
  })();
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
      mediaBtnCopy = "volume_up";
      setButtonIcon(mediaBtnCopy);
      return (heroPlayer.current.muted = false);
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
      <video
        ref={heroPlayer}
        onEnded={handleReplay}
        poster={posterVideo}
        className="hero__video"
      >
        <source src={testVideo} type="video/mp4" />
      </video>
      <div className="hero__logo">
        <picture>
          <img
            src="https://occ-0-29-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTtL_nABZG6H0nH54qzdDIcTUNDfA_-jA7QyyUcHJ65dAnVjKwSxie-cZoEcwyMKpHQNGtkbFVa4-4R6bqXOVqffwWCPNiS8kFwY.png?r=7f7"
            alt=""
          />
        </picture>
      </div>
      <article className="hero__synopsis">
        <div className="hero__synopsis__title">
          <h2>N.º 8 en México hoy</h2>
        </div>
        <div className="hero__synopsis__description">
          <p>
            Hartos de que su matrimonio no ande bien, Connie y su marido
            acuerdan una separación de 100 días para averiguar si el amor
            realmente crece con la distancia.
          </p>
        </div>
      </article>
      <div className="hero__controls">
        <div>
          <button className="hero__controls__play">
            <i className="material-icons">play_arrow</i>
            <span>Reproducir</span>
          </button>
          <button className="hero__controls__info">
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
    </section>
  );
};

export default Hero;
