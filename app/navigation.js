"use client"

import styles from "./Navigation.module.css"

export default function Navigation() {
    function openform(e) {
        console.log("click from", e)
        document.getElementById("form").style.display = "flex"
        document.getElementById("listnote").style.display = "none"
    }

    function openlist(e) {
        console.log("click from", e)
        document.getElementById("listnote").style.display = "block"
        document.getElementById("form").style.display = "none"
    }
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <h1 style={{color: "white"}}>Cafe Tari A</h1>
                </div>
                <ul>
                    <li>
                        <a onClick={(e) => openlist(e)}>Menu</a>
                    </li>
                    <li>
                        <a onClick={(e) => openform(e)}>Tambah</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}