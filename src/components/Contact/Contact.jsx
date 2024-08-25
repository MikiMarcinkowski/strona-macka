// import React from "react";
import css from "./Contact.module.css"; // Importujemy moduł CSS dla stylizacji

function Contact() {
  return (
    <div className={css.container}>
      <h3>Kontakt</h3>
      <div className={css.contactInfo}>
        <div className={css.contactItem}>
          <h4>Adres:</h4>
          <p>ul. Przykładowa 12, 00-001 Warszawa</p>
        </div>
        <div className={css.contactItem}>
          <h4>Telefon:</h4>
          <p>+48 123 456 789</p>
        </div>
        <div className={css.contactItem}>
          <h4>Email:</h4>
          <p>kontakt@przyklad.pl</p>
        </div>
      </div>
      <div className={css.mapContainer}>
        <h4>Znajdź nas na mapie:</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1020.1579966665001!2d19.419960370914335!3d51.153371657207295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1724618195004!5m2!1spl!2spl"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;


{/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1020.1579966665001!2d19.419960370914335!3d51.153371657207295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1724618195004!5m2!1spl!2spl"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */}