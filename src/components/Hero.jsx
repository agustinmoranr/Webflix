import React, { useState, useRef } from "react";
import testVideo from "../assets/videos/test-video-2.mp4";

const Hero = () => {
  const [mediaBtn, setMediaBtn] = useState("volume_up");
  const heroPlayer = useRef();

  function handleButtonAction(e) {
    e.preventDefault();
    let mediaBtnCopy = mediaBtn;
    mediaBtnCopy = "replay";
    setMediaBtn(mediaBtnCopy);
  }

  function toggleMute(icon) {
    let mediaBtnCopy = mediaBtn;
    if (icon === "volume_off") {
      mediaBtnCopy = "volume_up";
    }
    if (icon === "volume_up") {
      mediaBtnCopy = "volume_off";
    }
    if (icon === "replay") {
      heroPlayer.current.play();
      mediaBtnCopy = "volume_up";
      setMediaBtn(mediaBtnCopy);
      return (heroPlayer.current.muted = false);
    }
    setMediaBtn(mediaBtnCopy);
    return (heroPlayer.current.muted = !heroPlayer.current.muted);
  }
  function handleAction(e) {
    e.preventDefault();
    return toggleMute(mediaBtn);
  }

  return (
    <section className="hero">
      <video
        ref={heroPlayer}
        onEnded={handleButtonAction}
        autoPlay
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
          <button onClick={handleAction} className="material-icons">
            {mediaBtn}
          </button>
          <span>TV-MA</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
