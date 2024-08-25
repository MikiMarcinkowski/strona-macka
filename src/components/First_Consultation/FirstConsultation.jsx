// import React from "react";
import css from "./FirstConsultation.module.css"; // Importujemy moduł CSS dla stylizacji

function FirstConsultation() {
  return (
    <div className={css.container}>
      <h1>Jak przygotować się do konsultacji w gabinecie?</h1>
      <ul className={css.list}>
        <li>
          <h2>Przemyśl, jaki dokładnie problem sprowadza Cię do gabinetu.</h2>
        </li>
        <li>
          <h2>Zabierz ze sobą pełną możliwą dokumentację medyczną:</h2>
          <p>
            wyniki badań obrazowych (RTG, MRI, USG), opisy badań, wypisy ze
            szpitala, inne zalecenia odwiedzonych wcześniej specjalistów
          </p>
        </li>
        <li>
          <h2>Proszę o nieprzyjmowanie leków przeciwbólowych w dniu wizyty.</h2>
        </li>
        <li>
          <h2>Przynieś strój sportowy na zmianę:</h2>
          <p>krótkie spodenki, luźny podkoszulek, sportowy stanik.</p>
        </li>
        <li>
          <h2>Przyjdź 10 minut przed planowanym rozpoczęciem wizyty.</h2>
        </li>
      </ul>
    </div>
  );
}

export default FirstConsultation;
