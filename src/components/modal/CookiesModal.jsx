// src/components/modal/CookiesModal.jsx
import React, { useEffect, useState } from "react";
import styles from "./CookiesModal.module.css"; // Upewnij się, że stworzyłeś ten plik CSS

const CookiesModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdź, czy zgoda na ciasteczka została już zapisana
    const isConsentGiven = localStorage.getItem("cookiesConsent");
    if (!isConsentGiven) {
      setIsVisible(true); // Pokaż modal, jeśli zgoda nie została udzielona
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted"); // Zapisz zgodę w localStorage
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesConsent", "declined"); // Opcjonalnie zapisz odmowę
    setIsVisible(false);
  };

  if (!isVisible) return null; // Ukryj modal, jeśli nie jest widoczny

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Polityka Ciasteczek</h2>
        <p>
          Ta strona używa ciasteczek, aby zapewnić najlepsze doświadczenie.
          Kontynuując przeglądanie, wyrażasz zgodę na ich użycie.
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={handleAccept}>Akceptuję</button>
          <button onClick={handleDecline}>Odmowa</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
