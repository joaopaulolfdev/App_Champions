import React from "react";
import Styles from './Button.module.css'
import { Link } from "react-router-dom";

export default function MyButton({to}) {
    return (
        <Link to={to} >
            <button className={Styles.btn}>Cadastrar!</button>
        </Link>
    )
}