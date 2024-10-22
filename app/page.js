"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const form = document.getElementById("myForm");

    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const notes = document.getElementById("notes").value;

      console.log("Form Submitted:", { name, notes });
      var targetElement = document.getElementById("cardlist");
      var newHtml =
        `<div class="card"
          <div class="card-header">
            <div class="card-title">` +
              name +
            `</div>
          </div>
          <div class="card-content">` +
            notes +
          `</div>
        </div>`;
      targetElement.innerHTML += newHtml;
    };
}, []);

const isList = true;
return (
  <main className={styles.main}>
    <section id="form" className={styles.section} style={{ display: "none" }}>
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
          
          <button className={styles.button} type="submit">
            Tambahkan
          </button>
        </form>
      </div>
    </section>
    
    <section
      id="listnote"
      className={styles.section}
      style={{ display: "block" }}
    >
      <h2 className={styles.sectionTitle}>List Note </h2>
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