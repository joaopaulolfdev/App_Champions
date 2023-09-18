import React from "react"
import styles from '../pages/Home.module.css'
import Button from '../MyButton/Button'


export default function Home() {
    return (
        <container className={styles.home_container}>
            <h1 className={styles.home_loader}>Abra sua conta e aposte no melhor <b>bolão do cariri!</b></h1>
            <Button />
        </container>
        
        

    )
}

