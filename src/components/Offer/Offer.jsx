import { useState } from "react";
import css from "./Offer.module.css";

function Offer() {
  const [selectedOption, setSelectedOption] = useState(null);

   

    
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={css.container}>
      <h1>Nasza Oferta</h1>
      <div className={css.menu}>
        <button
          onClick={() => handleOptionClick("pijawki")}
          className={css.optionButton}
        >
          Pijawki
        </button>
        <button
          onClick={() => handleOptionClick("igły")}
          className={css.optionButton}
        >
          Igły
        </button>
        <button
          onClick={() => handleOptionClick("masaż")}
          className={css.optionButton}
        >
          Masaż
        </button>
        <button
          onClick={() => handleOptionClick("fizjoterapia")}
          className={css.optionButton}
        >
          Fizjoterapia
        </button>
      </div>
      <div className={css.offerContent}>
        {selectedOption === "pijawki" && (
          <div className={css.offerItem}>
            <h2>Pijawki</h2>
            <p>
              Opis usługi pijawki. Pijawki to technika terapeutyczna, która może
              pomóc w różnych schorzeniach.
            </p>
          </div>
        )}
        {selectedOption === "igły" && (
          <div className={css.offerItem}>
            <h2>Igły</h2>
            <p>
              Opis usługi igły. Terapia igłami jest skuteczną metodą w leczeniu
              wielu problemów zdrowotnych.
            </p>
          </div>
        )}
        {selectedOption === "masaż" && (
          <div className={css.offerItem}>
            <h2>Masaż</h2>
            <p>
              Opis usługi masażu. Masaż relaksacyjny i leczniczy dla poprawy
              samopoczucia i zdrowia.
            </p>
          </div>
        )}
        {selectedOption === "fizjoterapia" && (
          <div className={css.offerItem}>
            <h2>Fizjoterapia</h2>
            <p>
              Opis usługi fizjoterapii. Fizjoterapia pomaga w rehabilitacji i
              leczeniu urazów oraz bólu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Offer;
