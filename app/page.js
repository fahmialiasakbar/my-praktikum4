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
      const price = document.getElementById("price").value;
      const category = document.getElementById("category").value;
      const description = document.getElementById("description").value;

      console.log("Form Submitted:", { name, price, category, description });
      let targetElement = '';
      if (category === "1") {
        targetElement = document.getElementById("cardlist-makanan");
      } else {
        targetElement = document.getElementById("cardlist-minuman");
      }

      let newHtml =
        `<div class="card">
          <div class="card-header">
            <div class="card-title">` +
              name +
            `</div>
            <div class="card-subtitle">Rp` +
              price +
            `,-
            </div>
          </div>
          <div class="card-content">` +
            description +
          `</div>
        </div>`;
      targetElement.innerHTML += newHtml;

      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
      document.getElementById("description").value = "";
      document.getElementById("category").value = "1";

      document.getElementById("listnote").style.display = "block"
      document.getElementById("form").style.display = "none"
    };
}, []);

return (
  <main className={styles.main}>
    <section id="form" 
      className={styles.section} 
      style={{ display: isList ? "none" : "flex" }}
      >
      <div className={styles.width50p}>
        <h2 className={styles.sectionTitle}>Tambah Menu</h2>
        <form id="myForm" className={styles.form}>

          <label className={styles.label} htmlFor="name">
            Nama:
          </label>
          <input className={styles.input} type="text" id="name" name="name" />
          
          <label className={styles.label} htmlFor="price">
            Harga:
          </label>
          <input className={styles.input} type="number" id="price" name="price" />
          
          <label className={styles.label} htmlFor="category">
            Kategori:
          </label>
          <select className={styles.select} id="category" name="category">
            <option value="1">Makanan</option>
            <option value="2">Minuman</option>
          </select>
          
          <label className={styles.label} htmlFor="description">
            Deskripsi:
          </label>
          <textarea className={styles.textarea} id="description" name="description"></textarea>
          
          <button className={styles.button} type="submit">
            Tambahkan
          </button>
        </form>
      </div>
    </section>
    
    <section
      id="listnote"
      className={styles.section}
      style={{ display: isList ? "block" : "none" }}
    >

      <h2 id="makanan" className={styles.sectionTitle}>Makanan</h2>
      <div id="cardlist-makanan">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Rawon</div>
            <div className="card-subtitle">Rp75.000,-</div>
          </div>
          <div className="card-content">
            Rawon adalah makanan khas Jawa Timur yang berupa sup daging berkuah hitam sebagai hasil campuran dari kluwek.
          </div>
        </div>
      </div>

      <h2 id="minuman" className={styles.sectionTitle}>Minuman</h2>
      <div id="cardlist-minuman">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Susu Pacet</div>
            <div className="card-subtitle">Rp275.000,-</div>
          </div>
          <div className="card-content">
            Susu pacet adalah susu murni yang diambil dari kambing perah yang diberi makanan khusus.
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}