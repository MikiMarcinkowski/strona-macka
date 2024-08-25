// import React from "react";
import css from "./AboutMe.module.css"; // Importujemy moduł CSS dla stylizacji

function AboutMe() {
  return (
    <div className={css.container}>
      <img src="./src/photo/maciek-fartuch.webp" alt="Moje zdjęcie" className={css.photo} />
      <p className={css.description}>
        mgr Maciej Marcinkowski- jestem zawodowym fizjoterapeutą, pasjonatem
        ludzkiego ciała oraz zdrowego trybu życia. Od 2012 czynnie zajmuję się
        szeroko pojętym terminem jakim jest zdrowie. Łącząc moją wiedzę oraz
        obserwacje i praktykę na co dzień pomagam ludziom w zmianie swojego
        życia, wizerunku oraz poprawy jakości życia bez bólu.Staram się dzielić
        wiedzą z pacjentami jak w zdrowy sposób prewencyjnie dbać o organizm.
      </p>
    </div>
  );
}

export default AboutMe;
