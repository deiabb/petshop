import React from "react";
import styles from './CartWidget.module.css';

export default function CartWidget() {
    let count = 0
    return (
       
        <>
                <p className={styles.cart}>
                <span class="material-symbols-outlined">
                shopping_cart_checkout
                </span>
                </p>
                <p className={styles.counter} >{count}</p>
        </>
    )
}