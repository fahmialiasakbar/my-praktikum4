"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isList, setIsList] = useState(false);

  useEffect(() => {
    const form = document.getElementById("myForm");

    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const notes = document.getElementById("notes").value;
      const color = document.getElementById("color").value;

      console.log("Form Submitted:", { name, notes, color });
      var targetElement = document.getElementById("cardlist");
      var newHtml =
        `<div class="card `+ color +`"
          <div class="card-header">
            <div class="card-title">` +
              name +
            `</div>
          <div class="card-content">` +
            notes +
          `</div>
        </div>`;
      targetElement.innerHTML += newHtml;

      document.getElementById("name").value = "";
      document.getElementById("notes").value = "";
      document.getElementById("color").value = "white";

      setIsList(true);
    };
}, []);

return (
  <main className={styles.main}>
    <section id="form" className={styles.section} style={{ display: isList ? 'none' : 'flex' }}>
      <div className={styles.width50p}>
        <h2 className={styles.sectionTitle}>Create Note</h2>
        <form id="myForm" className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Title:
          </label>
          <input className={styles.input} type="text" id="name" name="name" />
          
          <label className={styles.label} htmlFor="notes">
            Note:
          </label>
          <textarea className={styles.textarea} id="notes" name="notes"></textarea>
          
          <label className={styles.label} htmlFor="color">
            Color:
          </label>
          <select className={styles.select} id="color" name="color">
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>

          <button className={styles.button} type="submit">
            Tambahkan
          </button>
        </form>
      </div>
    </section>
    
    <section
      id="listnote"
      className={styles.section}
      style={{ display: isList ? 'block' : 'none' }}
    >
      <h2 className={styles.sectionTitle}>List Note</h2>
      <div id="cardlist">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Card Title</div>
          </div>
          <div className="card-content">
            This is a sample card with some content. You can edit
            or delete
            this card using the icons above.
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}