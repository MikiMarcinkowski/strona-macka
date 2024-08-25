// import React from "react";
import css from "./Home.module.css"; // Importujemy moduł CSS (jeśli chcesz dodać style)

function Home() {
  return (
    <div className={css.container}>
      <h1>Fizjoterapiafit</h1>
      <p>
        Fizjoterapię można opisać jako zespół metod leczniczych mających na celu
        przywrócenie prawidłowego stanu funkcjonowania organizmu. Do stanów
        bólowych najczęściej dochodzi na skutek przeciążeń w życiu codziennym
        (brak zachowania zasad ergonomii w miejscu pracy), kontuzji i urazów,
        zmian zwyrodnieniowych czy operacji. Jako fizjoterapeuta na co dzień
        zajmuję się redukcją bólu (kręgosłupa, stawów obwodowych, migreny), oraz
        usprawnianiem po przebytych urazach. Dzięki indywidualnemu podejściu, po
        przebytej konsultacji oraz badaniu na pierwszym spotkaniu, jestem w
        stanie dobrać najlepszy program terapii. Każdy pacjent najlepiej zna
        swój organizm, dzięki temu podczas każdej wizyty poza terapią, staram
        się dzielić wiedzą z pacjentem w jaki sposób może szybciej wrócić do
        zdrowia wykorzystując autoterapię, oraz udzielam porad jak postępować
        prewencyjnie aby nie powrócił stan bólowy. Numer Prawa Wykonywania
        Zawodu Fizjoterapeuty 44108. „Nie czekaj! Właściwa chwila nie nadchodzi.
        Zacznij natychmiast – tu i teraz. Posługuj się narzędziami, jakie masz
        pod ręką, a lepsze znajdziesz w trakcie pracy.” – Napoleon Hill
      </p>
    </div>
  );
}

export default Home;
