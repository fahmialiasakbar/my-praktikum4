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
        document.getElementById("listnote").style.display = "flex"
        document.getElementById("form").style.display = "none"
    }
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <h1 style={{color: "white"}}>Notes Next.js</h1>
                </div>
                <ul>
                    <li>
                        <a onClick={(e) => openlist(e)}>List</a>
                    </li>
                    <li>
                        <a onClick={(e) => openform(e)}>Add</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}