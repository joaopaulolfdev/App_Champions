import React from "react"
import styles from '../pages/Home.module.css'
import Button from '../pages/Button'

export default function Home() {
    return (
        <container className={styles.home_container}>
            <h1 className={styles.home_loader}>Abra sua conta e aposte no melhor <p className={styles.home_loader_p}>bolão do cariri!</p></h1>
            <Button to="/Cadastrar" />
            
        </container>



    )
}

